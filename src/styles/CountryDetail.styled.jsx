import styled from "styled-components";

const CountryDetailStyle = styled.main`
  min-height: 92vh;
  background-color: ${({ isDarkMode, theme }) =>
    isDarkMode ? theme.colors.veryDarkBlue : theme.colors.veryLightGray};

  .main-wrapper {
    width: min(95%, 125rem);
    margin-inline: auto;
    padding-top: 8rem;
  }

  .first-section {
    background-color: ${({ isDarkMode, theme }) =>
      isDarkMode ? "#2B3844" : theme.colors.veryLightGray};
    display: flex;
    gap: 1rem;
    align-items: center;
    padding-block: 1rem;
    padding-left: 3.5rem;
    width: 13.6rem;
    border-radius: 0.7rem;

    & p {
      font-size: 1.6rem;
      color: ${({ isDarkMode, theme }) =>
        isDarkMode ? theme.colors.anotherGray : theme.colors.veryDarkBlue};
    }
  }

  .arrow {
    font-size: 1.6rem;
    color: ${({ isDarkMode, theme }) =>
      isDarkMode ? theme.colors.veryLightGray : theme.colors.veryDarkBlue};
  }

  .second-section {
    margin-top: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .country-image {
    width: 54rem;
    height: 40.1rem;
    border-radius: 1rem;
  }

  .info-wrapper {
    width: 59.8rem;
  }

  .country-name {
    font-size: 2.4rem;
    font-weight: 800;
    color: ${({ isDarkMode, theme }) =>
      isDarkMode ? theme.colors.veryLightGray : theme.colors.veryDarkBlue};
  }

  .second-wrapper {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;

    & div {
      & p {
        font-size: 1.4rem;
        font-weight: 600;
        color: ${({ isDarkMode, theme }) =>
          isDarkMode ? theme.colors.veryLightGray : theme.colors.veryDarkBlue};
        margin-bottom: 0.7rem;

        & span {
          font-weight: 300;
          color: ${({ isDarkMode, theme }) =>
            isDarkMode ? theme.colors.anotherGray : theme.colors.veryDarkBlue};
        }
      }
    }
  }

  .third-wrapper {
    margin-top: 3rem;

    & p {
      font-size: 1.6rem;
      font-weight: 600;
      color: ${({ isDarkMode, theme }) =>
        isDarkMode ? theme.colors.veryLightGray : theme.colors.veryDarkBlue};
    }
  }

  .border-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  .border-link {
    color: ${({ isDarkMode, theme }) =>
      isDarkMode ? theme.colors.anotherGray : theme.colors.veryDarkBlue};
    font-size: 1.4rem;
    background-color: ${({ isDarkMode, theme }) =>
      isDarkMode ? "#2B3844" : theme.colors.veryLightGray};
    padding: 0.5rem 1rem;
    border: 1px solid
      ${({ isDarkMode, theme }) =>
        isDarkMode ? "#2B3844" : theme.colors.veryLightGray};
    border-radius: 0.7rem;
  }
`;

export default CountryDetailStyle;
