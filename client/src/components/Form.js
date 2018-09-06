import React, { Component } from 'react';
import axios from 'axios';

let picks = [];

class Form extends Component {

  

  render() {
    return (
      <div>
        <h3>Pick 3!</h3>
        <form>
          <div>
            <span onClick={ () => {if (picks.length < 3) {picks.push("Art"); console.log(picks);}} }>Arts</span>
            <span onClick={ () => {if (picks.length < 3) {picks.push("Business"); console.log(picks);}} }>Business</span>
          </div>
          <div>
            <span onClick={ () => {if (picks.length < 3) {picks.push("Fashion"); console.log(picks);}} }>Fashion</span>
            <span onClick={ () => {if (picks.length < 3) {picks.push("Health"); console.log(picks);}} }>Health</span>
          </div>
          <div>
          <span onClick={ () => {if (picks.length < 3) {picks.push("Politics"); console.log(picks);}} }>Politics</span>
          <span onClick={ () => {if (picks.length < 3) {picks.push("Science"); console.log(picks);}} }>Science</span>
          </div>
          <div>
          <span onClick={ () => {if (picks.length < 3) {picks.push("Sports"); console.log(picks);}} }>Sports</span>
          <span onClick={ () => {if (picks.length < 3) {picks.push("Technology"); console.log(picks);}} }>Technology</span>
          </div>
          <div>
          <span onClick={ () => {if (picks.length < 3) {picks.push("Travel"); console.log(picks);}} }>Travel</span>
          <span onClick={ () => {if (picks.length < 3) {picks.push("World"); console.log(picks);}} }>World</span>
          </div>
          <input type="submit" value="Next"/> 
        </form>
      </div>
    );
  }
}

export default Form;
