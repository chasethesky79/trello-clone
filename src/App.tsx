import { AddNewItem } from './components/AddNewItem';
import { Column } from './components/Column';
import { AppContainer } from './styles';

function App() {
  return (
    <AppContainer>
      <Column text='Todo: '></Column>
      <AddNewItem toggleButtonText='+ Add New List' onAdd={() => console.log(`Hello`)} dark={false}/>
    </AppContainer>
  );
}

export default App;
