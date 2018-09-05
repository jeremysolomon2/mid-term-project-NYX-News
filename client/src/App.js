import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {


  async getNews() {
    let news;
    news = await axios.get('/health')
    console.log(news)
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
