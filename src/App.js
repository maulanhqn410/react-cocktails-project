import React from "react";
import {Switch, Route} from "react-router-dom";
// import page 
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";

import Navbar from "./components/Navbar";
export default function App() {
  return <>
  <Navbar />
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/about"  component={About}/>
    <Route path="/cocktail/:id"  component={SingleCocktail}/>
    <Route   component={Error}/>
  </Switch>
  </>;
}
