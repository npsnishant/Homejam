import React from 'react'
import { useState } from 'react'
import './style.css'
import revData from '../../revData'
import Review from './Review'

const ReviewList = () => {

    const [reviewData, setReviewData] = useState(revData);

    return (
        <>
            <div className='review'>
                <h1>Reviews</h1>
                <hr className='lines' />
            </div>

            <div className='review-container'>
                {reviewData.map((items) => {
                    return <Review className="act" items={items} />
                })}
            </div>
        </>
    )
}

export default ReviewList