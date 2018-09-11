import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../css/Form.css'
import Header from './Header'


class Form extends Component {

  constructor(){
    super()
    this.pushForm = this.pushForm.bind(this)
  }
  
  pushForm(ev) {
    console.log(ev.target)
    let category = ev.target.dataset.category
    ev.target.classList.remove("btn-warning")
    ev.target.classList.add("btn-primary")


    this.props.pushPicks(category)
  }

  render() {
    return (
            
            <div className="home-container">
              <div>
                <div className="form-logo">
                  <img src="/sitelogo2.png" alt="na"></img>
                </div>
              <h3>Pick 3!</h3>
                <span className="btn btn-warning" onClick={ this.pushForm } data-category="Arts">Art</span>
                <span className="btn btn-warning" onClick={ this.pushForm } data-category='Business'>Business</span> 
              </div>
              <div>
                <span className="btn btn-warning" onClick={ () => {this.props.pushPicks('Fashion')} }>Fashion</span>
                <span className="btn btn-warning" onClick={ () => {this.props.pushPicks('Health')} }>Health</span> 
              </div>
              <div>
                <span className="btn btn-warning" onClick={ () => {this.props.pushPicks('Politics')} }>Politics</span>
                <span className="btn btn-warning" onClick={ () => {this.props.pushPicks('Science')} }>Science</span> 
              </div>
              <div>
                <span className="btn btn-warning" onClick={ () => {this.props.pushPicks('Sports')} }>Sports</span>
                <span className="btn btn-warning" onClick={ () => {this.props.pushPicks('Technology')} }>Technology</span> 
              </div>
              <div>
                <span className="btn btn-warning" onClick={ () => {this.props.pushPicks('Travel')} }>Travel</span>
                <span className="btn btn-warning" onClick={ () => {this.props.pushPicks('World')} }>World</span> 
              </div>
              <div className="sec sec-three">
                <button className="btn btn-three"><Link to="/topnews">Next</Link></button>
              </div>
            </div>
    );
  }
}

export default Form;
