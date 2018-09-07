import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../css/SectionsTop.css'


export default class SectionsTop extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            display: 'show'
        }
        
    }

    async componentDidMount() {
        let articles;
        articles = await axios.get(`./${this.props.picks}`)
        articles = articles.data.results
        this.setState({articles})
        // console.log(this.state.articles)
    }

    
    render() {
        return (
         
                <div>
                    <div className={this.state.display} >
                        <h1>{`${this.props.picks} Section`}</h1>
                        <ul>
                            {
                                this.state.articles.slice(0,3).map((article, i) => {
                                    return(
                                        <div key = {`article-title-${i}`}>
                                            <li><img src={article.multimedia[1].url}></img></li>
                                            <li>{article.title}</li>
                                            <li>{article.url}</li>
                                        
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <Link  to={`/allnews?p=${this.props.picks}`}>{`More ${this.props.picks} News`}</Link>
                   
                </div>
           

        )
    }
}

