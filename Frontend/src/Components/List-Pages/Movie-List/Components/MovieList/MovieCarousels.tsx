import React from 'react';
import './MovieCarousels.css';

function MovieCarousels() {
    return(
        <div className='MovieCarousels__Container'>
            <div className='MovieCarousels__Carousel1'>
                <div className="MovieCarousels__Carousel1__ButtonLeft">
                    <p>&#9664;</p>
                </div>
                <div className="MovieCarousels__Carousel1__Card"></div>
                <div className="MovieCarousels__Carousel1__Card"></div>
                <div className="MovieCarousels__Carousel1__Card"></div>
                <div className="MovieCarousels__Carousel1__Card"></div>
                <div className="MovieCarousels__Carousel1__Card"></div>
                <div className="MovieCarousels__Carousel1__ButtonRight">
                    <p>&#9654;</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCarousels