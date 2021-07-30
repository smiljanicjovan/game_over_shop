import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DealPage from "./pages/DealPage/DealPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SingleGamePage from "./pages/SingleGamePage/SingleGamePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/deals" component={DealPage} exact />
          <Route path="/search" component={SearchPage} exact />
          <Route path="/:id" component={SingleGamePage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
