import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import DealPage from "./pages/DealPage/DealPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SingleGamePage from "./pages/SingleGamePage/SingleGamePage";
import CartPage from "./pages/CartPage/CartPage";

import SignUp from "./pages/Signup/Signup";
import SignIn from "./pages/Signin/Signin";
import StorePage from "./pages/StorePage/Storepage";
import StoreDealPage from "./pages/StoreDealPage/StoreDealPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/deals" component={DealPage} exact />
          <Route path="/stores" component={StorePage} exact />

          <Route path="/search" component={SearchPage} exact />
          <Route path="/checkout" component={CartPage} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/signin" component={SignIn} exact />

          <Route path="/:storeid" component={StoreDealPage} exact />
          <Route path="/:id" component={SingleGamePage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
