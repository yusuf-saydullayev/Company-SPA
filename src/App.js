import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import "./App.css";
import WOW from "wow.js";
function App() {
  new WOW().init();
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/AboutUs" component={AboutUs} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
