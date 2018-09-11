import React, { Component } from 'react';
import SectionsTop from './SectionsTop';

class TopNews extends Component {

  render() {
    return (
      <div className='wrapper'>  
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
