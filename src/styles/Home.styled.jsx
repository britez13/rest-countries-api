import styled from "styled-components";

const HomeStyle = styled.main`
  background-color: ${({ theme }) => theme.colors.veryLightGray};
  min-height: 92vh;

  .home-wrapper {
    width: min(95%, 125rem);
    margin-inline: auto;
    background-color: ${({ theme }) => theme.colors.veryLightGray};
    padding-top: 3rem;
  }

  .options {
    padding-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__form {
        padding: 1.5rem 3rem;
        background-color: white;
        border-radius: .7rem;
        width: 25vw;
        display: flex;
        gap: 1.5rem;
    }

    &__search-icon {
        font-size: 1.3rem;
        color: ${({theme})=>theme.colors.darkGray};
    }

    &__input {
        border: none;
        outline: none;
    }

  }

  .countries {
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    gap: 4.6vw;
  }

  .country {
    width: 26.4rem;
    height: 33.6rem;
    background-color: white;
    box-shadow: 0px 0px 1px 1px #c9bfbf;
    border-radius: 0.7rem;

    &__image {
      width: 100%;
      height: 16rem;
      display: block;
      object-fit: fill;
      border-top-left-radius: 0.7rem;
      border-top-right-radius: 0.7rem;
    }

    &__info {
      padding: 2.2rem;
    }

    &__name {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 0.7rem;

      & span {
        font-weight: 300;
      }
    }
  }
`;
export default HomeStyle;
