import React from 'react'
import './style.css'
import spark_proj from '../../img/spark_proj.jpg'
import arrow from '../../img/right-arrows.png'
import union from '../../img/Union.png'


const Card = ({items}) => {
    console.log(items)
  return (
      <>
    <div className='card-wrapper'>
                <img className='imgs' src={spark_proj}/>
                <p className='categ'>{items.category}</p>
                <p className='name'>{items.name}</p>
                <div className='detail'>
                    <p>More Info <span> <img src={arrow}/></span> </p>
                    <img src={union}/>
            </div>
    </div>
    </>
  )
}


export default Card