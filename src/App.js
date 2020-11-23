import React from "react";
import "./styles.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Blog from "./components/Blog";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>

      <div>
        <Navbar />
      </div>
    </div>
  );
}
