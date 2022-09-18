import styled from "styled-components";

const HeaderStyle = styled.header`
  height: 9.5vh;
  background-color: ${({ isDarkMode, theme }) =>
    isDarkMode ? theme.colors.darkGreen : theme.colors.white};
  padding-block: 1.5rem;
  border-bottom: 0.5px solid gray;

  .main-wrapper {
    width: min(95%, 125rem);
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 2rem;
    font-weight: 800;
    color: ${({ isDarkMode, theme }) =>
      isDarkMode ? theme.colors.white : theme.colors.veryDarkColor};
  }

  .theme-toggle {
    all: unset;
    cursor: pointer;

    & div {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      & p {
        font-size: 1.4rem;
        font-weight: 600;
        color: ${({ isDarkMode, theme }) =>
          isDarkMode ? theme.colors.white : theme.colors.veryDarkBlue};
      }
    }
  }

  .dark-icon {
    font-size: 1.4rem;
    color: white;
  }

  .light-icon {
    font-size: 1.4rem;
    color: black;
  }
`;

export default HeaderStyle;