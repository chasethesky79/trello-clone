import { AppContainer, CardContainer, ColumnContainer, ColumnTitle } from './styles';

function App() {
  return (
    <AppContainer>
      <ColumnContainer>
      <ColumnTitle>Todo: </ColumnTitle>
        <CardContainer>First Item</CardContainer>
        <CardContainer>Second Item</CardContainer>
        <CardContainer>Third Item</CardContainer>
      </ColumnContainer>
    </AppContainer>
  );
}

export default App;
