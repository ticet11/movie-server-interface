import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Body from "./components/Body/body";
import AddMovie from "./pages/AddMovie";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/addmovie"
                            component={AddMovie}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const Home = () => (
    <div>
        <Body />
    </div>
);
export default App;
