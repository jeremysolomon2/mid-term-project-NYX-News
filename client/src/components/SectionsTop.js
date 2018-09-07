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
            <div>
                <h1>{`${this.props.picks} Section`}</h1>
                <ul>
                    {
                        this.state.articles.slice(0,3).map((article, i) => {
                            return(
                                <div key = {`article-title-${i}`}>
                                    <li>{article.title}</li>
                                    <li>{article.url}</li>
                                    <li>{article.multimedia[1].url}</li>
                                </div>
                            )
                        })
                    }
                </ul>
                {/* <p>{`More ${this.props.picks} News`}</p> */}
                <Link  to="/allnews">{`More ${this.props.picks} News`}</Link>

            </div>

        )
    }
}

