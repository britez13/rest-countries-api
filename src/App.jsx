import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { Header, Home, CountryDetail } from "./components";

const theme = {
  colors: {
    darkBlue: "hsl(209, 23%, 22%",
    veryDarkBlue: "hsl(207, 26%, 17%)",
    veryDarkColor: "hsl(200, 15%, 8%)",
    darkGray: "hsl(0, 0%, 52%)",
    veryLightGray: "hsl(0, 0%, 98%)",
    white: "hsl(0, 0%, 100%)",
  },

  fonts: {
    nunito: "'Nunito Sans', sans-serif",
  },
};

export const CountriesContext = React.createContext();

const App = () => {
  const [allCountries, setAllCountries] = useState();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CountriesContext.Provider value={[allCountries, setAllCountries]}>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/:id' element={<CountryDetail />} />
          </Routes>
        </CountriesContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
