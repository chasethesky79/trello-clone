import { useContext, useReducer } from 'react';
import { AddNewItem } from './components/AddNewItem';
import { Column } from './components/Column';
import appReducer from './reducers/appStateReducer';
import { addList } from './state/actions';
import { AppStateContext } from './state/AppStateContext';
import { AppContainer } from './styles';


function App() {
  const { lists } = useContext(AppStateContext)
  const [state, dispatch] = useReducer(appReducer, { lists })
  return (
    <AppContainer>
      {state?.lists?.map(({ id, text }) => <Column id={id} text={text} key={id}/>)}
      <AddNewItem toggleButtonText='+ Add another list' onAdd={(text) => dispatch(addList(text))} dark={false}/>
    </AppContainer>
  );
}

export default App;
