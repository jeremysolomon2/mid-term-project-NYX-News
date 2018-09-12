import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import TopNews from './components/TopNews'
import AllNews from './components/AllNews'
import Header from './components/Header'
import Form from './components/Form'
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
    };
  };

  
  render() {
    return (
            <div>
                  {/* <Header /> */}
                  <BrowserRouter>
                    <div>
                      <Route exact path="/" component = {() => <Form pushPicks={this.pushPicks} picks={this.state.picks}/>} ></Route>
                      <Route path="/topnews" component={() => <TopNews picks={this.state.picks} />}></Route> 
                      <Route path="/allnews" component={() => <AllNews />}></Route>     
                    </div>
                  </BrowserRouter>
            </div>
            );
        }
}

export default App;
