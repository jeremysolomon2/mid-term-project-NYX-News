import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../css/Form.css'
import Header from './Header'


class Form extends Component {

  constructor(props){
    super(props)
    this.pushForm = this.pushForm.bind(this)
  }
  
  pushForm(ev) {
    // console.log(ev.target.dataset.category)
    let category = ev.target.dataset.category
    // ev.target.classList.remove("btn-warning")
    // ev.target.classList.add("btn-primary")
    this.props.pushPicks(category)
  }

  componentDidMount(prevProps, newProps){
    console.log(this.props.picks)
    this.props.picks.map((pick)=>{
      this[pick].classList.remove("btn-warning");
      this[pick].classList.add("btn-primary");
      // if(pick == "Arts"){
      //   this.art.classList.remove("btn-warning");
      //   this.art.classList.add("btn-primary");
      // }
    })
  }


  render() {
    console.log("I rendered")
    return (
            
            <div className="home-container">
              <div>
                <div className="form-logo">
                  <img src="/sitelogo2.png" alt="na"></img>
                </div>
              <h3>Pick 3!</h3>
                <span ref={(ele) => this.arts = ele} className="btn btn-warning" onClick={ this.pushForm } data-category="arts">Art</span>
                <span ref={(ele) => this.business = ele}  className="btn btn-warning" onClick={ this.pushForm } data-category='business'>Business</span> 
              </div>
              <div>
                <span ref={(ele) => this.fashion = ele}  className="btn btn-warning" onClick={ this.pushForm } data-category='fashion'>Fashion</span>
                <span ref={(ele) => this.health = ele}  className="btn btn-warning" onClick={ this.pushForm } data-category='health'>Health</span> 
              </div>
              <div>
                <span ref={(ele) => this.politics = ele}  className="btn btn-warning" onClick={ this.pushForm } data-category='politics'>Politics</span>
                <span ref={(ele) => this.science = ele}  className="btn btn-warning" onClick={ this.pushForm } data-category='science'>Science</span> 
              </div>
              <div>
                <span ref={(ele) => this.sports = ele} className="btn btn-warning" onClick={ this.pushForm } data-category='sports'>Sports</span>
                <span ref={(ele) => this.technology = ele} className="btn btn-warning" onClick={ this.pushForm } data-category='technology'>Technology</span> 
              </div>
              <div>
                <span ref={(ele) => this.travel = ele} className="btn btn-warning" onClick={ this.pushForm } data-category='travel'>Travel</span>
                <span ref={(ele) => this.world = ele} className="btn btn-warning" onClick={ this.pushForm } data-category='world'>World</span> 
              </div>
              <div className="sec sec-three">
                <button className="btn btn-three"><Link to="/topnews">Next</Link></button>
              </div>
            </div>
    );
  }
}

export default Form;
