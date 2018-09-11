import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
// import axios from 'axios';
import TopNews from './components/TopNews'
import AllNews from './components/AllNews'
import Header from './components/Header'
import Home from './components/Home'
import './css/App.css'

// import { ENETDOWN } from 'constants';


let picks = [];


class App extends Component {
  constructor() {
    super();
    this.state = {
      displayForm: 'show',
    }
  }
 
    toggleDisplay() {
      this.setState({displayForm: 'hidden'})
    }

  render() {
    return (

<div><Home />


     
      <BrowserRouter>
      
        <div className='home-container'>
     
        {/* <img src="/sitelogo.png"/> */}
          <div className={this.state.displayForm}>
            {/* <Header ☹️ /> */}

            <h3>Pick 3!</h3>
            <div>
             <span onClick={ () => {if (picks.length < 4) {picks.push("Arts"); console.log(picks);}} }>Art</span>
             <span onClick={ () => {if (picks.length < 4) {picks.push("Business"); console.log(picks);}} }>Business</span>
            </div>
  
            <div>
              <span onClick={ () => {if (picks.length < 4) {picks.push("Fashion"); console.log(picks);}} }>Fashion</span>
              <span onClick={ () => {if (picks.length < 4) {picks.push("Health"); console.log(picks);}} }>Health</span>
            </div>
            
            <div>
              <span onClick={ () => {if (picks.length < 4) {picks.push("Politics"); console.log(picks);}} }>Politics</span>
              <span onClick={ () => {if (picks.length < 4) {picks.push("Science"); console.log(picks);}} }>Science</span>
            </div>

            <div>
              <span onClick={ () => {if (picks.length < 4) {picks.push("Sports"); console.log(picks);}} }>Sports</span>
              <span onClick={ () => {if (picks.length < 4) {picks.push("Technology"); console.log(picks);}} }>Technology</span>
            </div>

            <div>
              <span onClick={ () => {if (picks.length < 4) {picks.push("Travel"); console.log(picks);}} }>Travel</span>
              <span onClick={ () => {if (picks.length < 4) {picks.push("World"); console.log(picks);}} }>World</span>
            </div>
            <div className="sec sec-three">
              <button className="btn btn-three"><Link onClick={this.toggleDisplay.bind(this)} to="/topnews">Next</Link></button>
            </div>
          </div>

          <Route path="/topnews" component={() => <TopNews picks={picks} />}></Route> 
          <Route path="/allnews" component={() => <AllNews />}></Route>     

        </div>
      </BrowserRouter></div>
    );
  }
}

export default App;
