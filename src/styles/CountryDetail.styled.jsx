import styled from "styled-components";

const CountryDetailStyle = styled.main`
  width: min(95%, 125rem);
  margin-inline: auto;

  .first-section {
    margin-top: 8rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 0.5rem 1rem;

    & p {
      font-size: 1.6rem;
    }
  }

  .arrow {
    font-size: 1.6rem;
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
  }

  .second-wrapper {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;

    & div {
      & p {
        font-size: 1.4rem;
        font-weight: 600;
        margin-bottom: 0.7rem;

        & span {
          font-weight: 300;
        }
      }
    }
  }

  .third-wrapper {
    margin-top: 3rem;
    & div {
      & p {
        font-size: 1.6rem;
        font-weight: 600;
      }
    }
  }

  .border-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: .7rem;

  }

  .border-link {
    font-size: 1.4rem;
    background-color: white;
    padding: .5rem 1rem;
    border: 1px solid gray;
    border-radius: .7rem;
  }
`;

export default CountryDetailStyle;
