import React, { Component } from 'react';
import axios from 'axios';
import AllNews from './AllNews'
import { BrowserRouter, Route, Link} from 'react-router-dom';


export default class SectionsTop extends Component {
    constructor() {
        super()
        this.state = {
            articles: []
        }
        
    }

    async componentDidMount() {
        let articles;
        articles = await axios.get(`./${this.props.picks}`)
        articles = articles.data.results
        this.setState({articles})
        console.log(this.state.articles)
    }

    render() {
        return (
           
           
<div className="outside-box">

<div className="section"><span>{`${this.props.picks.toUpperCase()}`}</span></div>


<div className='grid-container'>{this.state.articles.slice(0,3).map((article, i) => {
return(
<div className="card">
{/* <div key = {`article-title-${i}`}> */}
<img className="card-img-top" src={article.multimedia[4].url} alt="No image provided"/>
<p className ="card-title">{article.title}</p>
<p className ="card-body">{article.abstract}</p>
<div className="click-more"><a href={article.url} className="btn btn-warning">Click for more</a></div>



</div>
)
})
}
</div>

 <div className="btn btn-warning"><Link to="/allnews">{`More ${this.props.picks} News`}</Link></div>

{/* <div class="navbar">
<a href="#home">Home</a>
<a href="#news">News</a>
<a href="#contact">Contact</a>
</div> */}
</div>
)
}
}

