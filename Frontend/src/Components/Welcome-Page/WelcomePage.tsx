import React, { useRef } from "react";
import { CardsMockData } from "./WelcomePage.constants";
import './WelcomePage.css'

function WelcomePage() {
    

function ValidImage() {
    
}

    return (
        <div className="WelcomePage__PageBody">
            <div className="WelcomePage__ImageCarousel">
                {CardsMockData.map((src: string) => {
                    return (
                        <div className="WelcomePage__ImageCarousel__Container">
                            <img  src={src} alt="is not displayed" className="WelcomePage__ImageCarousel__Image" />
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
                })}




            </div>
        </div>
    )
}

export default WelcomePage;