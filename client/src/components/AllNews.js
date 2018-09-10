import React, { Component } from 'react';
import axios from 'axios';

export default class AllNews extends Component {
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
                {/* <h1>{`${this.props.picks} Section`}</h1> */}
                <h1>{`Health Section`}</h1>


                
                    {
                        this.state.articles.map((article, i) => {
                            return(
                                <div key = {`article-title-${i}`}>
                                    <li>{article.title}</li>
                                    <li>{article.url}</li>
                                    <li>{article.multimedia[1].url}</li>
                                </div>
                            )
                        })
                    }
               
            </div>

        )
    }
}