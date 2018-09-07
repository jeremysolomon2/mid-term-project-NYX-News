import React, { Component } from 'react';
import axios from 'axios';

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
        console.log(window.location)
        url = window.location.search.slice(3)
        this.setState({url})
        console.log(this.state.url)
        console.log(window.location.search.slice(3))
        articles = await axios.get(`./${window.location.search.slice(3)}`)
        articles = articles.data.results
        this.setState({articles})
        console.log(this.state.articles)
    }

    render() {
        return (
            <div>
                <h1>{`${window.location.search.slice(3)} Section`}</h1>

                <ul>
                    {
                        this.state.articles.map((article, i) => {
                            return(
                                <div key = {`article-title-${i}`}>
                                    <li><a href={article.url} target="_blank"><img src={article.multimedia[1].url}></img></a></li>
                                    <li>{article.title}</li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>

        )
    }
}