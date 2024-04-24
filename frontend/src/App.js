import styled from "styled-components";
import { MainLayout } from "./styles/layouts";
import Object from "./components/Object";
// import Navigation from "./components/Navigation/Navigation";
import Navigation from "./components/Navigation/Navigation";


function App() {
  return (
    <AppStyled className="App">
      <MainLayout>
        <Object />
        <Navigation />
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
