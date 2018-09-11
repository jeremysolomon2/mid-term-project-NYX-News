import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../css/Form.css'
import Header from './Header'


class Form extends Component {
  render() {
    return (
            
            <div className="home-container">
            
              
              <div>
                <div className="form-logo">
                  <img src="/sitelogo2.png" alt="na"></img>
                </div>
              <h3>Pick 3!</h3>
                <span onClick={ () => {this.props.pushPicks('Arts')} }>Art</span>
                <span onClick={ () => {this.props.pushPicks('Business')} }>Business</span> 
              </div>
              <div>
                <span onClick={ () => {this.props.pushPicks('Fashion')} }>Fashion</span>
                <span onClick={ () => {this.props.pushPicks('Health')} }>Health</span> 
              </div>
              <div>
                <span onClick={ () => {this.props.pushPicks('Politics')} }>Politics</span>
                <span onClick={ () => {this.props.pushPicks('Science')} }>Science</span> 
              </div>
              <div>
                <span onClick={ () => {this.props.pushPicks('Sports')} }>Sports</span>
                <span onClick={ () => {this.props.pushPicks('Technology')} }>Technology</span> 
              </div>
              <div>
                <span onClick={ () => {this.props.pushPicks('Travel')} }>Travel</span>
                <span onClick={ () => {this.props.pushPicks('World')} }>World</span> 
              </div>
              <div className="sec sec-three">
                <button className="btn btn-three"><Link to="/topnews">Next</Link></button>
              </div>
            </div>
    );
  }
}

export default Form;
