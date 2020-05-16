
import React, { Component } from 'react';
import './App.css';
import Header from "./components/header"
import Body from './components/Body/body'


class App extends Component {
  render() {
  return (
    <div className="App">

      <Header/>

      <Body />

    </div>
  );
 }
}

export default App;
