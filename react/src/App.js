import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import Header from "./components/header";
import Body from "./components/Body/body";
import AllMovies from "./pages/AllMovies";
import AddMovie from "./pages/AddMovie";
<<<<<<< HEAD
import "./Style/main.scss";

class App extends Component {
=======
import Movie from './pages/Movie';
import "./Style/main.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }
>>>>>>> d32a7ed... api-playground
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/allmovies' component={AllMovies} />
            <Route exact path='/addmovie' component={AddMovie} />
<<<<<<< HEAD
=======
            <Route exact path='/movie/:slug' render={(props) => {
              return <Movie {...props} />
            }} />
>>>>>>> d32a7ed... api-playground
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
