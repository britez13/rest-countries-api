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
      p {
        font-size: 1.4rem;
        font-weight: 600;
        margin-bottom: 0.7rem;

        & span {
          font-weight: 300;
        }
      }
    }
  }
`;

export default CountryDetailStyle;
