import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
// import { render } from "react-dom";
import Body from "./Body/body";
import AddMovie from "./pages/AddMovie";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />

                    <Route exact path="/" />
                    <Route exact path="/addmovie" component={AddMovie} />
                    <Body />
                </div>
            </Router>
        );
    }
}

export default App;
