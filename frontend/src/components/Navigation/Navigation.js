import React from "react";
import styled from "styled-components";
import avatar from "../../assets/avatar.jpg";


function Navigation() {
  return (
    <NavStyled>
      <div className="user-container">
        <img src={avatar} alt="avatar" />
      </div>
    </NavStyled>
    );
}

const NavStyled = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 10rem;
//   background-color: #282828;
//   position: sticky;
//   top: 0;
//   z-index: 10;
`;