import React from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png";
import { menuItems } from "../../utils/menuItems";
import { signout } from "../../utils/icons";


function Navigation() {
  return (
    <NavStyled>
      <div className="user-container">
        <img src={avatar} alt="avatar" />
        <div className="user-info">
            <h4>John Doe</h4>
            <p>Balance</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return <li
          key={item.id}
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        })}
      </ul>
      <div className="bottom-nav">
        <li>
          {signout} Sign Out
        </li>
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