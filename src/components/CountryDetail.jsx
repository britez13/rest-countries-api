import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import CountryDetailStyle from "../styles/CountryDetail.styled";

const CountryDetail = ({ isDarkMode, setIsDarkMode }) => {
  const { id } = useParams();
  const [allCountries, setAllCountries] = useState();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    }
  }, [])

  useEffect(() => {
    setIsLoading(true);

    const data = localStorage.getItem("allCountries");

    if (data) {
      setAllCountries(JSON.parse(data));
      getCountry(data);
    }

    setIsLoading(false);
  }, [id]);

  const getCountry = (data) => {
    const myCountry = JSON.parse(data).find(
      (country) => country.name.common.toLowerCase() === id
    );
    setCountry(myCountry);
  };

  const getNativeName = (data) => {
    if (data) {
      const nativeName = Object.values(data)[0].official;
      return nativeName;
    }
  };

  const getCurrencies = (data) => {
    if (data) {
      const currencies = Object.values(data)
        .map((item) => item.name)
        .join(", ");
      return currencies;
    }
  };

  const getLanguages = (data) => {
    if (data) {
      const values = Object.values(data).join(", ");
      return values;
    }
  };

  const getBorderCountries = (data) => {
    const borders = data.map((border) => {
      return allCountries.find((country) => country.cca3 === border);
    });

    return (
      <span className='border-wrapper'>
        {borders.map((country) => {
          return (
            <Link
              key={country.name.common}
              className='border-link'
              to={`/${country.name.common.toLowerCase()}`}
            >
              {country.name.common}
            </Link>
          );
        })}
      </span>
    );
  };

  return (
    <CountryDetailStyle isDarkMode={isDarkMode}>
      <div className='main-wrapper'>
        <Link className='first-section' to='/'>
          <FontAwesomeIcon
            className='arrow'
            icon={faArrowLeftLong}
          ></FontAwesomeIcon>
          <p>Back</p>
        </Link>

        <section className='second-section'>
          <img className='country-image' src={country?.flags.svg} />
          <div className='info-wrapper'>
            <div className='first-wrapper'>
              <h1 className='country-name'>{country?.name.common}</h1>
            </div>
            <div className='second-wrapper'>
              <div>
                <p>
                  Native Name:{" "}
                  <span>{getNativeName(country?.name.nativeName)}</span>
                </p>
                <p>
                  Population:{" "}
                  <span>{parseInt(country?.population).toLocaleString()}</span>
                </p>
                <p>
                  Region: <span>{country?.region}</span>
                </p>
                <p>
                  Sub Region: <span>{country?.subregion}</span>
                </p>
                {country?.capital && (
                  <p>
                    Capital: <span>{country?.capital[0]}</span>
                  </p>
                )}
              </div>

              <div>
                <p>
                  Top Level Domain: <span>{country?.tld[0]}</span>
                </p>
                <p>
                  Currencies: <span>{getCurrencies(country?.currencies)}</span>
                </p>

                <p>
                  Languages: <span>{getLanguages(country?.languages)}</span>
                </p>
              </div>
            </div>
            <div className='third-wrapper'>
              {country?.borders && (
                <p>Border countries: {getBorderCountries(country?.borders)}</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </CountryDetailStyle>
  );
};

export default CountryDetail;
