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
        console.log("articles",articles)
        articles = articles.data.results.filter(art => {if(art.multimedia.length > 0) return art});
        this.setState({articles})
        console.log(this.state.articles)
    }

    render() {
        return (
            <div>
                <h1>{`${window.location.search.slice(3)} Section`}</h1>
                    {
                        this.state.articles.map((article, i) => {
                            console.log('Article', article.url);
                            return(
                                <div key = {`article-title-${i}`}>
                                    <li><a href={article.url} target="_blank"><img src={article.multimedia[1].url}></img></a></li>
                                    <li>{article.title}</li>
                                </div>
                            )
                        })
                    }
            </div>
        )
    }
}