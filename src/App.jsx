import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { Header, Home, CountryDetail } from "./components";

const theme = {
  colors: {
    darkBlue: "hsl(209, 23%, 22%)",
    veryDarkBlue: "hsl(207, 26%, 17%)",
    veryDarkColor: "hsl(200, 15%, 8%)",
    darkGreen: "rgb(43, 56, 68)",
    darkGray: "rgb(133, 133, 133)",
    anotherGray: "#979797",
    veryLightGray: "rgb(250, 250, 250)",
    white: "hsl(0, 0%, 100%)",
  },

  fonts: {
    nunito: "'Nunito Sans', sans-serif",
  },
};

export const CountriesContext = React.createContext();

const App = () => {
  const [allCountries, setAllCountries] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CountriesContext.Provider value={[allCountries, setAllCountries]}>
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Routes>
            <Route exact path='/' element={<Home isDarkMode={isDarkMode} />} />
            <Route
              path='/:id'
              element={<CountryDetail isDarkMode={isDarkMode} />}
            />
          </Routes>
        </CountriesContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
