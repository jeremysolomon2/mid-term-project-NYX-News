import React, { Component } from 'react';
import SectionsTop from './SectionsTop';
import Header from './Header'

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
            }
          )
         }
        </div>
        {/* <aside class="aside aside-1">Aside 1</aside>
        <aside class="aside aside-2">Aside 2</aside>
         <footer class="footer">Footer</footer> */}
      </div>
    );
  }
}

export default TopNews;
