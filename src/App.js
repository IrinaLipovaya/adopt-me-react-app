import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";

// dynamic import
const Details = lazy(() => import("./Details")); // placeholder of the Details component
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const themeHook = useState("darkblue");

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Suspense fallback={<h1>Loading route...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
