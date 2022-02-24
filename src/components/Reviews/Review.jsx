import React from 'react'
import './style.css'
import spark from '../../img/spark_proj.jpg'
import flag from '../../img/flag.png'

const Review = ({items}) => {

    console.log(items)
    return (
        <>
        <div className='rev-wrapper'>
            <div className='rev-title'>
                <img className='top-img' src={spark}/>
                <div className='rev-title-right'>
                    <p className='name'>{items.name}</p>
                    <span><img src={flag}/>
                    {items.category}
                    </span>
                </div>
            </div>

            <div className='text'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, consectetur. Minima earum a at facilis et est aut optio, qui, numquam architecto voluptate eligendi. Necessitatibus impedit quaerat dolor veritatis ut.</p>
            </div>
        </div>

        <div className='space'></div>
</>
        
    )
}

export default Review;