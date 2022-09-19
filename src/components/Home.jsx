import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeStyle from "../styles/Home.styled";
import { FetchFromAPI } from "../utils/FetchFromAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Oval } from "react-loader-spinner";

const Home = ({ isDarkMode, setIsDarkMode }) => {
  const [allCountries, setAllCountries] = useState(null);
  const [countries, setCountries] = useState(null);
  const [countrySearched, setCountrySearched] = useState("");
  const [region, setRegion] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();

    setCountries((prev) => {
      let newCountries = [];

      if (region === "All") {
        newCountries = allCountries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        );
      } else {
        newCountries = allCountries.filter(
          (country) =>
            country.name.common
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) &&
            country.region === region
        );
      }

      return newCountries;
    });

    setCountrySearched(e.target.value);
  };

  const handleFilter = (e) => {
    console.log(e.target.selectedOptions[0].label);
    if (e.target.selectedOptions[0].label === "All") {
      setCountries(allCountries);
      setRegion("All");
    } else {
      const newCountries = allCountries.filter(
        (country) => country.region === e.target.selectedOptions[0].label
      );
      setCountries(newCountries);
      setRegion(e.target.selectedOptions[0].label);
    }
  };

  useEffect(() => {
    FetchFromAPI("all").then((data) => {
      setAllCountries(data);
      setCountries(data);
      setIsLoading(false);
      localStorage.setItem("allCountries", JSON.stringify(data));
    });

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true)
    }

  }, []);

  console.log(countries);

  return (
    <HomeStyle isDarkMode={isDarkMode}>
      <section className='home-wrapper'>
        <section className='options'>
          <form className='options__form' id='my_form' onSubmit={e => e.preventDefault()}>
            <FontAwesomeIcon
              className='options__search-icon'
              icon={faSearch}
            ></FontAwesomeIcon>
            <input
              className='options__input'
              type='text'
              placeholder='Search for a country...'
              value={countrySearched}
              onChange={handleSearch}
            />
          </form>

          <select
            className='options__select'
            name='select'
            id='my_form'
            onChange={handleFilter}
          >
            <option value='value0'>All</option>
            <option value='value1'>Africa</option>
            <option value='value2'>Americas</option>
            <option value='value3'>Asia</option>
            <option value='value3'>Europe</option>
            <option value='value3'>Oceania</option>
          </select>
        </section>

        <section className='countries'>
          {isLoading ? (
            <Oval
              height={80}
              width={80}
              color={isDarkMode ? "#fefeff" : "#414753"}
              wrapperStyle={{}}
              wrapperClass=''
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor={isDarkMode ? "white" : "gray"}
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          ) : (
            countries.length === 0 ? <p className="no-country-warning">Any country match width the input.</p>  : countries.map(({ name, flags, population, region, capital }) => {
              return (
                <Link
                  className='country'
                  to={`/${name.common.toLowerCase()}`}
                  key={name.common}
                >
                  <img className='country__image' src={flags.svg} />
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
            })
          )}
        </section>
      </section>
    </HomeStyle>
  );
};

export default Home;
