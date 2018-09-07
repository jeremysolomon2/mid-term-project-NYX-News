import React, { Component } from 'react';
import SectionsTop from './SectionsTop';


class TopNews extends Component {

  render() {
    return (
      <div>
        {
            this.props.picks.map((pick, i) => {
                return (
                    <SectionsTop picks={pick} key={`section-${i}`}/>
                )
            })
        }
      </div>
    );
  }
}

export default TopNews;
