import React, { useRef, useState } from "react";
import TranspositionWrapper from "./Components/TranspositionWrapper";
import { CardsMockData } from "./WelcomePage.constants";
import './WelcomePage.css'



function ImageCard({ src }: { src: string }) {
    return (
        <div className="WelcomePage__ImageCarousel__Container">

            <img src={src} alt="is not displayed" className="WelcomePage__ImageCarousel__Image" />
            <div className="WelcomePage__NameAndRating">
                <p className="WelcomePage__MovieName">Movie Name</p>
                <ul className="WelcomePage__MovieRating">
                    <li>&#9733;</li>
                    <li>&#9733;</li>
                    <li>&#9733;</li>
                    <li>&#9733;</li>
                    <li>&#9733;</li>
                </ul>
            </div>
        </div>
    )
}





function WelcomePage() {
    const [images, setImages] = useState(CardsMockData)
    const [currentImageIndex, setCurrentImageIndex] = useState(1)
    const [prevImageIndex, setPrevImageIndex] = useState(0)
    const [nextImageIndex, setNextImageIndex] = useState(2)



    function ValidImage() {

    }


    const mainImageStyle = {

    }

    const rightImageStyle = {
        perspective: 12,
        rotateY: 1,
        scaleX: 1.5,
        translateX: 3
    }

    const leftImageStyle = {
        perspective: 12,
        rotateY: 359,
        scaleX: 1.5,
        translateX: 3
    }

    return (
        <div className="WelcomePage__PageBody">
            <div className="WelcomePage__ImageCarousel">
                <TranspositionWrapper {...rightImageStyle}>
                    <ImageCard src={images[prevImageIndex]} />
                </TranspositionWrapper>

                <TranspositionWrapper {...mainImageStyle}>
                    <ImageCard src={images[currentImageIndex]} />
                </TranspositionWrapper>
                
                <TranspositionWrapper {...leftImageStyle}>
                    <ImageCard src={images[nextImageIndex]} />
                </TranspositionWrapper>
            </div>
        </div>
    )
}

export default WelcomePage;