import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import TopNews from './components/TopNews'
import AllNews from './components/AllNews'
import Header from './components/Header'
// import Home from './components/Home'
import './css/App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayForm: 'show',
      picks: []
    }
    this.pushPicks = this.pushPicks.bind(this);
  }
 
    pushPicks(section){
      if (this.state.picks.length < 3) {
      let joined = this.state.picks.concat(section);
      this.setState({ picks: joined })
      console.log(this.state.picks);
      };
    };

    toggleDisplay() {
      this.setState({displayForm: 'hidden'})
    };

  render() {
    return (
            <div>
                  <Header />
                  <BrowserRouter>
                    <div className='home-container'>
                      <div className={this.state.displayForm}>
                        <h3>Pick 3!</h3>
                        <div>
                          <span onClick={ () => {this.pushPicks('Arts')} }>Art</span>
                          <span onClick={ () => {this.pushPicks('Business')} }>Business</span> 
                        </div>
                        <div>
                          <span onClick={ () => {this.pushPicks('Fashion')} }>Fashion</span>
                          <span onClick={ () => {this.pushPicks('Health')} }>Health</span> 
                        </div>
                        <div>
                          <span onClick={ () => {this.pushPicks('Politics')} }>Politics</span>
                          <span onClick={ () => {this.pushPicks('Science')} }>Science</span> 
                        </div>
                        <div>
                          <span onClick={ () => {this.pushPicks('Sports')} }>Sports</span>
                          <span onClick={ () => {this.pushPicks('Technology')} }>Technology</span> 
                        </div>
                        <div>
                          <span onClick={ () => {this.pushPicks('Travel')} }>Travel</span>
                          <span onClick={ () => {this.pushPicks('World')} }>World</span> 
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
