import React from 'react'
import './style.css'
import { useState } from 'react'
import data from '../../data'
import Card from './Card'

const Categories = () => {

    const [item, setItem] = useState(data);

    return (
        <>
            <div className='categories'>
                <div className='cat-item'>
                    <h1>Upcoming Shows</h1>
                    <span>View All</span>
                </div>
                <hr className='line' />

                {/* cards */}

                <div className='ccc'>
                    {/* <div className='cards-container'> */}
                        <div className='card-container'>
                            {/* <Card item={item}/> */}
                            {item.map((items) => {
                                return <Card className="act" items={items} />
                            })}
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default Categories