import { useContext } from 'react';
import { AddNewItem } from './components/AddNewItem';
import { Column } from './components/Column';
import { addList } from './state/actions';
import { AppStateContext } from './state/AppStateContext';
import { AppContainer } from './styles';


function App() {
  const { lists, dispatch } = useContext(AppStateContext)
  return (
    <AppContainer>
      {lists?.map(({ id, text }) => <Column id={id} text={text} key={id}/>)}
      <AddNewItem toggleButtonText='+ Add another list' onAdd={(text) => dispatch(addList(text))} dark={false}/>
    </AppContainer>
  );
}

export default App;
