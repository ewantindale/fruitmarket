import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
