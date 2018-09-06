import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form'
import ArtsFull from './components/ArtsFull'
import ArtsTop from './components/ArtsTop'
import BusinessFull from './components/BusinessFull'
import BusinessTop from './components/BusinessTop'
import FashionFull from './components/FashionFull'
import FashionTop from './components/FashionTop'
import HealthFull from './components/HealthFull'
import HealthTop from './components/HealthTop'
import PoliticsFull from './components/PoliticsFull'
import PoliticsTop from './components/PoliticsTop'
import ScienceFull from './components/ScienceFull'
import ScienceTop from './components/ScienceTop'
import SportsFull from './components/SportsFull'
import SportsTop from './components/SportsTop'
import TechnologyFull from './components/TechnologyFull'
import TechnologyTop from './components/TechnologyTop'
import TravelFull from './components/TravelFull'
import TravelTop from './components/TravelTop'
import WorldFull from './components/WorldFull'
import WorldTop from './components/WorldTop'

class App extends Component {
  constructor() {
    super();
    this.state = {
      picks: [],
      sectionHealth: [],
      sectionTravel: [],
      sectionSports: [],
      sectionHealth: [],
      sectionTravel: [],
      sectionSports: [],
      sectionHealth: [],
      sectionTravel: [],
      sectionSports: [],
      sectionHealth: [],
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
      <Form />
        {/* <ul>
          <li onClick={this.getNews}>
          Hello World
          </li>
        </ul> */}
      </div>
    );
  }
}

export default App;
