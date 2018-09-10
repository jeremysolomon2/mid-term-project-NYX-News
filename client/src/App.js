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
      // sectionArt: {pick: false,
      //                 data: [],
      //                 display: false},
      // sectionBusiness: {pick: false,
      //                 data: [],
      //                 display: false},
      // sectionFashion: {pick: false,
      //                 data: [],
      //                 display: false},
      // sectionHealth: {pick: false,
      //                 data: [],
      //                 display: false},
      // sectionPolitics: {pick: false,
      //                 data: [],
      //                 display: false},
      // sectionScience: {pick: false,
      //                 data: [],
      //                 display: false},
      // // sectionSports: {pick: false,
      // //                 data: [],
      // //                 display: false},
      // sectionTechnology: {pick: false,
      //                 data: [],
      //                 display: false},
      // // sectionTravel: {pick: false,
      // //                 data: [],
      // //                 display: false},
      // sectionWorld: {pick: false,
      //                 data: [],
      //                 display: false
      // },
    }
  }
 

  // async componentDidMount() {

  //   let newsArt;
  //   let newsBusiness;
  //   let newsFashion;
  //   let newsHealth;
  //   let newsPolitics;
  //   let newsScience;
  //   let newsSports;
  //   let newsTechnology;
  //   let newsTravel;
  //   let newsWorld;
  //   newsArt = await axios.get('/arts');
  //   newsBusiness = await axios.get('/business');
  //   newsFashion = await axios.get('/fashion');
  //   newsHealth = await axios.get('/health');
  //   newsPolitics = await axios.get('/politics');
  //   newsScience = await axios.get('/science');
  //   // newsSports = await axios.get('/sports');
  //   newsTechnology = await axios.get('/technology');
  //   // newsTravel = await axios.get('/travel');
  //   newsWorld = await axios.get('/world');

  //   newsArt = newsArt.data.results
  //   newsBusiness = newsBusiness.data.results
  //   newsFashion = newsFashion.data.results
  //   newsHealth = newsHealth.data.results
  //   newsPolitics = newsPolitics.data.results
  //   newsScience = newsScience.data.results
  //   // newsSports = newsSports.data.results
  //   newsTechnology = newsTechnology.data.results
  //   // newsTravel = newsTravel.data.results
  //   newsWorld = newsWorld.data.results

  //   this.setState({
  //                 sectionArt: {data: newsArt},
  //                 sectionBusiness: {data: newsBusiness},
  //                 sectionFashion: {data: newsFashion},
  //                 sectionHealth: {data: newsHealth},
  //                 sectionPolitics: {data: newsPolitics},
  //                 sectionScience: {data: newsScience},
  //                 // sectionSports: {data: newsSports},
  //                 sectionTechnology: {data: newsTechnology},
  //                 // sectionTravel: {data: newsTravel},
  //                 sectionWorld: {data: newsWorld}            
  //               });
  //               console.log("hello")
  //               // console.log(this.state.sectionTravel)
  //               console.log(this.state.sectionArt)
  //             }
    
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
            
            <span onClick={ () => {if (picks.length < 4) {picks.push("Art"); console.log(picks);}} }>Art</span>



             <li><span onClick={ () => {if (picks.length < 4) {picks.push("Business"); console.log(picks);}} }>Business</span></li>
             <li> <span onClick={ () => {if (picks.length < 4) {picks.push("Fashion"); console.log(picks);}} }>Fashion</span></li>
             <li> <span onClick={ () => {if (picks.length < 4) {picks.push("Health"); console.log(picks);}} }>Health</span></li>
             
             
             
            
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
            
            
            <div class="sec sec-three">
            <button class="btn btn-three"><Link onClick={this.toggleDisplay.bind(this)} to="/topnews">Next</Link></button>
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
