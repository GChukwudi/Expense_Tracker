import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { MainLayout } from "./styles/layouts";
import Object from "./components/Object";
import Navigation from "./components/Navigation/Navigation";


function App() {
  const [active, setActive] = useState(1);

  const orbMemo = useMemo(() => {
    return <Object />;
  },[])

  return (
    <AppStyled className="App">
      <MainLayout>
        {orbMemo}
        <Navigation active={active} setActive={setActive} />
        <main>
          <h1>Home</h1>
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: light-pink;
  position: relative;
  main {
    flex: 1;
    background: rgba(255, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
