import React from "react";
import styled from "styled-components";
import { MainLayout } from "./styles/layouts";
import Object from "./components/Object";
import Navigation from "./components/Navigation/Navigation";


function App() {
  const [active, setActive] = React.useState(1);

  return (
    <AppStyled className="App">
      <MainLayout>
        <Object />
        <Navigation active={active} setActive={setActive} />
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
