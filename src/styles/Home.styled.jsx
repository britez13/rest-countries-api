import styled from "styled-components";

const HomeStyle = styled.main`
  background-color: ${({ isDarkMode, theme }) =>
    isDarkMode ? theme.colors.veryDarkBlue : theme.colors.veryLightGray};
  min-height: 92vh;

  .home-wrapper {
    width: min(95%, 125rem);
    margin-inline: auto;
    background-color: ${({ isDarkMode, theme }) =>
      isDarkMode ? theme.colors.veryDarkBlue : theme.colors.veryLightGray};
    padding-top: 3rem;
  }

  .options {
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: row;
      justify-content: space-between;
      gap: 0;
    }

    &__form {
      padding: 1.5rem 3rem;
      background-color: ${({ isDarkMode, theme }) =>
        isDarkMode ? "#2B3844" : theme.colors.white};
      box-shadow: ${({ isDarkMode }) =>
        isDarkMode ? "" : "0px 0px 10px 1px #dad6d685"};
      border-radius: 0.7rem;
      width: 100%;
      display: flex;
      gap: 1.5rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 25vw;
      }
    }

    &__search-icon {
      font-size: 1.3rem;
      color: ${({ isDarkMode, theme }) =>
        isDarkMode ? theme.colors.veryLightGray : theme.colors.anotherGray};
    }

    &__input {
      border: none;
      outline: none;
      background-color: transparent;
      color: ${({ isDarkMode, theme }) =>
        isDarkMode ? theme.colors.white : "#2B3844"};

      &::placeholder {
        color: ${({ isDarkMode, theme }) =>
          isDarkMode ? theme.colors.anotherGray : theme.colors.anotherGray};
      }
    }

    &__select {
      width: min(40%, 20rem);
      background-color: ${({ isDarkMode, theme }) =>
        isDarkMode ? "#2B3844" : theme.colors.white};
      color: ${({ isDarkMode, theme }) =>
        isDarkMode ? theme.colors.white : "#2B3844"};
      box-shadow: ${({ isDarkMode }) =>
        isDarkMode ? "" : "0px 0px 10px 1px #dad6d685"};
      padding: 1.5rem 3rem;
      outline: none;
      border: none;
      border-radius: 0.7rem;
      -webkit-appearance: none;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        border: solid red;
        border-width: 0 3px 3px 0;
        display: block;
      }
    }
  }

  .countries {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 7vw;
    min-height: 55vh;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 4.6vw;
    }
  }

  .no-country-warning {
    font-size: 2rem;
    color: ${({ isDarkMode, theme }) =>
      isDarkMode ? theme.colors.white : theme.colors.veryDarkColor};
  }

  .country {
    width: 83%;
    height: 35rem;
    background-color: ${({ isDarkMode, theme }) =>
      isDarkMode ? "#2B3844" : theme.colors.veryLightGray};
    box-shadow: 0px 0px 1px 1px
      ${({ isDarkMode, theme }) => (isDarkMode ? "#2B3844" : "#c9bfbf")};
    border-radius: 0.7rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 26.4rem;
      height: 33.6rem;
    }

    &__image {
      width: 100%;
      height: 17rem;
      display: block;
      object-fit: cover;
      border-top-left-radius: 0.7rem;
      border-top-right-radius: 0.7rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 16rem;
      }
    }

    &__info {
      padding: 2.2rem;
    }

    &__name {
      font-size: 1.8rem;
      color: ${({ isDarkMode, theme }) =>
        isDarkMode ? theme.colors.white : theme.colors.veryDarkColor};
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.4rem;
      font-weight: 600;
      color: ${({ isDarkMode, theme }) =>
        isDarkMode ? theme.colors.white : theme.colors.veryDarkColor};
      margin-bottom: 0.7rem;

      & span {
        font-weight: 300;
        color: ${({ isDarkMode, theme }) =>
          isDarkMode ? theme.colors.anotherGray : theme.colors.veryDarkBlue};
      }
    }
  }
`;
export default HomeStyle;
