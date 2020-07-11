import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import Header from "./components/header";
import Carousel from './components/carousel/carousel';
import AllMovies from "./pages/AllMovies";
import AddMovie from "./pages/AddMovie";
import Movie from './pages/Movie';
import "./Style/main.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/allmovies' component={AllMovies} />
            <Route exact path='/addmovie' component={AddMovie} />
            <Route exact path='/movie/:slug' render={(props) => {
              return <Movie {...props} />
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <div className='CarouselWrapper'>
        <h2>Family Movie Night</h2>
          <div>
            <Carousel genre='Animation' />
          </div>
        <h2>Something Funny</h2>  
          <div>
            <Carousel genre='Comedy' />
          </div> 
        <h2>Action Packed</h2> 
          <div>
            <Carousel genre='Action' />
          </div>
      </div>
  </div>
);
export default App;
