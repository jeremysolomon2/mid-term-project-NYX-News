import React, { Component } from 'react';
import SectionsTop from './SectionsTop';
import Header from './Header';


class TopNews extends Component {

  render() {
    return (
      <div className='wrapper'>  
      <Header />
      
        <div className='main'>
         {
            this.props.picks.map((pick, i) => {
                return (
                    <SectionsTop picks={pick} key={`section-${i}`}/>
                )
            })
         }
        </div>
      </div>
    );
  }
}

export default TopNews;
