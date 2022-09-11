import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeStyle from "../styles/Home.styled";
import { FetchFromAPI } from "../utils/FetchFromAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    FetchFromAPI().then((data) => setCountries(data));
  }, []);

  console.log(countries);

  return (
    <HomeStyle>
      <section className='home-wrapper'>
        <section className='options'>
          <form className='options__form'>
            <FontAwesomeIcon
              className='options__search-icon'
              icon={faSearch}
            ></FontAwesomeIcon>
            <input
              className='options__input'
              type='text'
              placeholder='Search for a country...'
            />
          </form>
          <form>
            <select name='select'>
              <option value='value1'>Africa</option>
              <option value='value2'>America</option>
              <option value='value3'>Asia</option>
              <option value='value3'>Europe</option>
              <option value='value3'>Oceania</option>
            </select>
          </form>
        </section>
        <section className='countries'>
          {countries &&
            countries.map(({ name, flags, population, region, capital }) => {
              return (
                <Link className='country' to={name.common} key={name.common}>
                  <img className='country__image' src={flags.png} />
                  <div className='country__info'>
                    <h2 className='country__name'>{name.common}</h2>
                    <p>
                      Population:{" "}
                      <span>{parseInt(population).toLocaleString()}</span>
                    </p>
                    <p>
                      Region: <span>{region}</span>
                    </p>
                    <p>
                      Capital: <span>{capital}</span>
                    </p>
                  </div>
                </Link>
              );
            })}
        </section>
      </section>
    </HomeStyle>
  );
};

export default Home;
