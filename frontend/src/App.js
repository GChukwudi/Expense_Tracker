import styled from "styled-components";
import { MainLayout } from "./styles/layouts";
import Object from "./components/Object/Object";
// import Navigation from "./components/Navigation/Navigation";


function App() {
  return (
    <AppStyled className="App">
      <Object />
      <MainLayout>
        {/* <Navigation /> */}
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
