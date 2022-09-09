import React from "react";
import HeaderStyle from "../styles/Header.styled";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="header__main-wrapper">
        <h1 className="header__title">Where in the world?</h1>
        <div className="header__secondary-wrapper">
          <span>Toggle</span>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
