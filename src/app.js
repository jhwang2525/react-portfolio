import React from "react";
import "./app.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router basename="/">
      <div id="app">
        <Wrapper>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
