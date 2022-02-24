import React from 'react'
import About from './components/About/About'
import Categories from './components/Categories/Categories'
// import Review from './components/Reviews/Review'
import './App.css'
import ReviewList from './components/Reviews/ReviewList'

const App = () => {
  return (
    <div>
      <About/>
      <div className='space'>
        <Categories/>
        <ReviewList/>
      </div>
    </div>
  )
}

export default App