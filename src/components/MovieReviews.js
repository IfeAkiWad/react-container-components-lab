// Code MovieReviews Here
import React from 'react'

const Review = ({
    display_title,
    byline,
    publication_date,
    headline,
    link,
    summary_short
}) => {
    return (
        <div key={display_title} className="review">
            <span>
            <h1>
                    {display_title}
            </h1>  
            <h2>
                <a href={link.url}> {headline} </a>
            </h2>
            <p>{byline}</p> <p>{publication_date}</p>
            <blockquote>{summary_short}</blockquote>
            </span>
            <br />
        </div>
    )
}


const MovieReviews = (props) => {
    return (
        <div className="review-list">
            {props.reviewList.map(Review)}
        </div>
    )
}

export default MovieReviews

