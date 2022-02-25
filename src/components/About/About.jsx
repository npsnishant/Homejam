import React from 'react'
import './style.css'
import heart from '../../img/heart.png'
import search from '../../img/search.png'


const About = () => {
    return (
        <>
            <div className='about' style={{ backgroundImage: "url(/image/about.png)" }}>
                <div className='navbar'>
                    <span class="logo">Homejam</span>
                    <nav>
                        <ul class="nav__links">
                            <span> <img src={search}/> </span>
                            <li><a href="#home">Search</a></li>
                            <li><a href="#about">Help</a></li>
                            <li><a href="#skills">Account</a></li>
                        </ul>
                    </nav>
                </div>
                <h1 className='title'>Cari Cari</h1>
                <p className='sub-title'>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>

                <div className='circ'>
                    <div className='circle'>
                        <div className='circle-data'>
                            <img className='img' src={heart} style={{ height: "30px", width: "30px" , paddingLeft:"34px" }} />
                            0
                            <br />
                            Label
                        </div>
                    </div>
                    <div className='circle'>
                        <div className='circle-data'>
                            <img className='img' src={heart} style={{ height: "30px", width: "30px" , paddingLeft:"34px" }} />
                            0
                            <br />
                            Label
                        </div>
                    </div>
                    <div className='circle'>
                        <div className='circle-data'>
                            <img className='img' src={heart} style={{ height: "30px", width: "30px" , paddingLeft:"34px" }} />
                            0
                            <br />
                            Label
                        </div>
                    </div>
                    <div className='circle'>
                        <div className='circle-data'>
                            <img className='img' src={heart} style={{ height: "30px", width: "30px" , paddingLeft:"34px" }} />
                            {/* 0
                            <br />
                            Label */}
                            <p>0</p>
                            <p>Label</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About;