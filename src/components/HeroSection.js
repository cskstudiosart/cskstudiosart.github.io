import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container-bg">
            <div className='hero-container'>
                {/*<video src='videos/video-2.mp4' autoPlay loop muted /> */}
                <figure className='hero-img-figure'>
                    <img src="images/logo-light.png" className="hero-img" />
                </figure>
                <h1>Studios</h1>
                <p>We create the dreams</p>
                <div className='hero-btns'>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        About
                    </Button>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        WATCH TRAILER <i className='far fa-play-circle' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection