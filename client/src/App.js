import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form'


class App extends Component {
  constructor() {
    super();
    this.state = {
      picks: [],
      sectionArt: {pick: false,
                      data: [],
                      display: false},
      sectionBusiness: {pick: false,
                      data: [],
                      display: false},
      sectionFashion: {pick: false,
                      data: [],
                      display: false},
      sectionHealth: {pick: false,
                      data: [],
                      display: false},
      sectionPolitics: {pick: false,
                      data: [],
                      display: false},
      sectionScience: {pick: false,
                      data: [],
                      display: false},
      sectionSports: {pick: false,
                      data: [],
                      display: false},
      sectionTechnology: {pick: false,
                      data: [],
                      display: false},
      sectionTravel: {pick: false,
                      data: [],
                      display: false},
      sectionWorld: {pick: false,
                      data: [],
                      display: false
      },
    }
    this.getNews = this.getNews.bind(this);
  }
 

  async getNews() {
    let newsArt;
    let newsBusiness;
    let newsFashion;
    let newsHealth;
    let newsPolitics;
    let newsScience;
    let newsSports;
    let newsTechnology;
    let newsTravel;
    let newsWorld;
    newsArt = await axios.get('/art');
    newsBusiness = await axios.get('/business');
    newsFashion = await axios.get('/fashion');
    newsHealth = await axios.get('/health');
    newsPolitics = await axios.get('/politics');
    newsScience = await axios.get('/science');
    newsSports = await axios.get('/sports');
    newsTechnology = await axios.get('/technology');
    newsTravel = await axios.get('/travel');
    newsWorld = await axios.get('/world');

    newsArt = newsSports.data.results
    newsBusiness = newsBusiness.data.results
    newsFashion = newsFashion.data.results
    newsHealth = newsHealth.data.results
    newsPolitics = newsPolitics.data.results
    newsScience = newsScience.data.results
    newsSports = newsSports.data.results
    newsTechnology = newsTechnology.data.results
    newsTravel = newsTravel.data.results
    newsWorld = newsWorld.data.results

    this.setState({sectionSports: newsSports,
                  sectionArt: newsArt,
                  sectionBusiness: newsBusiness,
                  sectionHealth: newsHealth,
                  sectionPolitics: newsPolitics,
                  sectionScience: newsScience,
                  sectionSports: newsSports,
                  sectionTechnology: newsTechnology,
                  sectionTravel: newsTravel,
                  sectionWorld: newsWorld            
                });
              }

  render() {
    return (
      <div className="App">
      <Form />
      <a onClick={this.getNews}>Hello World</a>
      {/* {this.state.sectionSports.map((article) => {
       return ( 
       <ul>
         <li>
           {article.title}
         </li>
        </ul>
       )
      })} */}
      </div>
    );
  }
}

export default App;
