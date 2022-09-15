import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CountriesContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FetchFromAPI } from "../utils/FetchFromAPI";
import CountryDetailStyle from "../styles/CountryDetail.styled";

const CountryDetail = () => {
  const { id } = useParams();
  const [allCountries] = useContext(CountriesContext);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    FetchFromAPI(`name/${id}`).then((data) => {
      setCountry(data[0]);
    });
  }, []);

  // const { name, flags, population, region, subregion, capital, tld, languages } = allCountries.find(
  //   (country) => country.name.common.toLowerCase() === id
  // );

  const getMultipleValues = (data) => {
    let values = "";
    values += Objects.value(data).map((value, index) => {
      return value;
    });
  };
  console.log(country);

  return (
    <CountryDetailStyle>
      <Link className='first-section' to="/">
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
                Native Name: <span></span>
              </p>
              {/* <p>{country.}</p>  */}
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
              <p>
                Capital: <span>{country?.capital[0]}</span>
              </p>
            </div>

            <div>
              <p>
                Top Level Domain: <span>{country?.tld[0]}</span>
              </p>
              {/* <p>{getMultipleValues(languages)}</p> */}
            </div>
          </div>
          <div className='third-wrapper'>
            <p>Border countries</p>
          </div>
        </div>
      </section>
    </CountryDetailStyle>
  );
};

export default CountryDetail;
