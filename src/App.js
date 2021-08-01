import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import DealPage from "./pages/DealPage/DealPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SingleGamePage from "./pages/SingleGamePage/SingleGamePage";
import CartPage from "./pages/CartPage/CartPage";
import SigninAndLogin from "./pages/SigninAndLogin/SigninAndLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/deals" component={DealPage} exact />
          <Route path="/search" component={SearchPage} exact />
          <Route path="/cart" component={CartPage} exact />
          <Route path="/login" component={SigninAndLogin} exact />
          <Route path="/:id" component={SingleGamePage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
