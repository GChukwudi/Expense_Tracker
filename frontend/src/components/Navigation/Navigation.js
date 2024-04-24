import React from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png";
import { menuItems } from "../../utils/menuItems";
import { signout } from "../../utils/icons";


function Navigation() {
  return (
    <NavStyled>
      <div className="user-container">
        <img src={avatar} alt="avatar" className="user-img" />
        <div className="user-info">
            <h4>God'sfavour Chukwudi</h4>
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
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(255, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  .user-container {
    img {
      width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
  }
  // .user-img {
  //   width: 50px;
  //   height: 50px;
  //   border-radius: 50%;
  // }
`;

export default Navigation;
