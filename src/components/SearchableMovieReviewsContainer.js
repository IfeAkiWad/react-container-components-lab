import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'sOqxo4v8cGrqxKrmjDhQqgsRmTF07kUi';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSearch = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL + this.state.searchTerm)
        .then(response => response.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }

    componentDidMount = () => {
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }
    
    render() {
        return (
            <div className="searchable-movie-reviews">
                Search Movies
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleSearch}/>
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviewList={this.state.reviews} />
            </div>
        )
    }
}
