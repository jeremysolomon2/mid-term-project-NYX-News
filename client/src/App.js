import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import TopNews from './components/TopNews'
import AllNews from './components/AllNews'
import Header from './components/Header'
import Home from './components/Home'
import './css/App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayForm: 'show',
      picks: []
    }
  }
 
    toggleDisplay() {
      this.setState({displayForm: 'hidden'})
    }

  render() {
    return (
            <div>
                  <Header />
                  <BrowserRouter>
                    <div className='home-container'>
                      <div className={this.state.displayForm}>
                        <h3>Pick 3!</h3>
                        <div>
                        <span onClick={ () => {if (this.state.picks.length < 3) {this.state.picks.push("Arts"); console.log(this.state.picks);}} }>Art</span>
                        <span onClick={ () => {if (this.state.picks.length < 3) {this.state.picks.push("Business"); console.log(this.state.picks);}} }>Business</span>
                        </div>
                        <div>
                          <span onClick={ () => {if (this.state.picks.length < 3) {this.state.picks.push("Fashion"); console.log(this.state.picks);}} }>Fashion</span>
                          <span onClick={ () => {if (this.state.picks.length < 3) {this.state.picks.push("Health"); console.log(this.state.picks);}} }>Health</span>
                        </div>
                        <div>
                          <span onClick={ () => {if (this.state.picks.length < 3) {this.state.picks.push("Politics"); console.log(this.state.picks);}} }>Politics</span>
                          <span onClick={ () => {if (this.state.picks.length < 3) {this.state.picks.push("Science"); console.log(this.state.picks);}} }>Science</span>
                        </div>
                        <div>
                          <span onClick={ () => {if (this.state.picks.length < 3) {this.state.picks.push("Sports"); console.log(this.state.picks);}} }>Sports</span>
                          <span onClick={ () => {if (this.state.picks.length < 3) {this.state.picks.push("Technology"); console.log(this.state.picks);}} }>Technology</span>
                        </div>
                        <div>
                          <span onClick={ () => {if (this.state.picks.length < 3) {this.state.picks.push("Travel"); console.log(this.state.picks);}} }>Travel</span>
                          <span onClick={ () => {if (this.state.picks.length < 3) {this.state.picks.push("World"); console.log(this.state.picks);}} }>World</span>
                        </div>
                        <div className="sec sec-three">
                          <button className="btn btn-three"><Link onClick={this.toggleDisplay.bind(this)} to="/topnews">Next</Link></button>
                        </div>
                      </div>
                      <Route path="/topnews" component={() => <TopNews picks={this.state.picks} />}></Route> 
                      <Route path="/allnews" component={() => <AllNews />}></Route>     
                    </div>
                  </BrowserRouter></div>
                );
              }
}

export default App;
