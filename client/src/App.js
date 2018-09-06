import React, { Component } from 'react';
import axios from 'axios';
import ArtsFull from './components/ArtsFull'
import ArtsTop from './components/ArtsTop'
import BusinessFull from './components/BusinessFull'
import BusinessTop from './components/BusinessTop'
import ArtsFull from './components/ArtsFull'
import ArtsFull from './components/ArtsFull'
import ArtsFull from './components/ArtsFull'
import ArtsFull from './components/ArtsFull'
import ArtsFull from './components/ArtsFull'
import ArtsFull from './components/ArtsFull'
import ArtsFull from './components/ArtsFull'
import ArtsFull from './components/ArtsFull'
import ArtsFull from './components/ArtsFull'
import ArtsFull from './components/ArtsFull'
import ArtsFull from './components/ArtsFull'


class App extends Component {
  constructor() {
    super();
    this.state = {
      sectionHealth: {},
      sectionTravel: {},
      sectionSports: {},
    }
    this.getNews = this.getNews.bind(this);
  }
 

  async getNews() {
    let newsHealth;
    let newsTravel;
    let newsSports;
    newsHealth = await axios.get('/health');
    newsTravel = await axios.get('/travel');
    newsSports = await axios.get('/sports');
    console.log(newsHealth);
    console.log(newsTravel);
    console.log(newsSports);
    this.setState({sectionSports: newsHealth});
    this.setState({sectionTravel: newsTravel});
    this.setState({sectionSports: newsSports});
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li onClick={this.getNews}>
          Hello World
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
