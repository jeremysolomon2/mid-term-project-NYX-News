import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'
export default class AllNews extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            url: ''
        }
    }

    async componentDidMount() {
        let url;
        let articles;
        // console.log(window.location)
        url = window.location.search.slice(3)
        this.setState({url})
        // console.log(this.state.url)
        // console.log(window.location.search.slice(3))
        articles = await axios.get(`./${window.location.search.slice(3)}`)
        // console.log("articles",articles)
        articles = articles.data.results.filter(art => {if(art.multimedia.length > 0) return art});
        this.setState({articles})
        // console.log(this.state.articles)
    }

    render() {
        return (
            <div className="wrapper">
                <Header /> 
                <div className="outside-box">
                <div className="section">
                    <span>{window.location.search.slice(3)}</span>
                </div>

                {/* <h1>{`${window.location.search.slice(3)}`}</h1> */}
                   <div className='grid-container'> {
                        this.state.articles.map((article, i) => {
                            // console.log('Article', article.url);
                            return(
                                <div key = {`article-title-${i}`} className="card">
                                    <img className="card-img-top" src={article.multimedia[1].url} alt="na"/>
                                    <p className ="card-title">{article.title}</p>
                                    <p className ="card-body">{article.abstract}</p>
                                    <div className="click-more">
                                        <a href={article.url} className="btn btn-default" target="_blank"> Continue Reading</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                
            </div>
        )
    }
}






