
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import { render } from 'react-dom';
import Body from './Body/body'


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
