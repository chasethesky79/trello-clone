import { useContext } from 'react';
import { AddNewItem } from './components/AddNewItem';
import { Column } from './components/Column';
import { AppStateContext } from './state/AppStateContext';
import { AppContainer } from './styles';


function App() {
  const { lists } = useContext(AppStateContext)
  return (
    <AppContainer>
      {lists?.map(({ id, text }) => <Column id={id} text={text}/>)}
      <AddNewItem toggleButtonText='+ Add another list' onAdd={() => console.log(`Hello`)} dark={false}/>
    </AppContainer>
  );
}

export default App;
