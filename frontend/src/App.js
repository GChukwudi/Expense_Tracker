import styled from "styled-components";
import { MainLayout } from "./styles/layouts";
import Object from "./components/Object";


function App() {
  return (
    <AppStyled className="App">
      <Object />
      <MainLayout>
        
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: light-pink;
  position: relative;
`;

export default App;
