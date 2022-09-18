import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import HeaderStyle from "../styles/Header.styled";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <HeaderStyle isDarkMode={isDarkMode}>
      <div className='main-wrapper'>
        <h1 className='title'>Where in the world?</h1>
        <button
          className='theme-toggle'
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? (
            <div>
              <FontAwesomeIcon
                className='dark-icon'
                icon={faMoon}
              ></FontAwesomeIcon>
              <p>Light Mode</p>
            </div>
          ) : (
            <div>
              <FontAwesomeIcon
                className='light-icon'
                icon={faMoon}
              ></FontAwesomeIcon>
              <p>Dark Mode</p>
            </div>
          )}
        </button>
      </div>
    </HeaderStyle>
  );
};

export default Header;
