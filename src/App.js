import React from "react";
import PurchaseToast from "./components/toast/PurchaseToast";
import { CartContextProvider } from "./context/CartContext";
import Navigation from "./components/nav/Navigation";
import Header from "./components/header/Header";
import CardPage from "./pages/CardPage";
import SandwichPage from "./pages/SandwichPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <Navigation />
        <PurchaseToast />
        <div className="container pt-5 pb-5">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/menu" component={CardPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/sandwich/:id" component={SandwichPage} />
            <Route path="/">
              <Header title="Sorry, that page doesn't exist!" />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartContextProvider>
  );
};

export default App;
