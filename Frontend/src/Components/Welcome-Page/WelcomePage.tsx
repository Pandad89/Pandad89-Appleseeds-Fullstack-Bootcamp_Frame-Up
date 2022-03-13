import React from "react";
import './WelcomePage.css'

function WelcomePage() {
    return (
        <div className="WelcomePage__PageBody">
            <div className="WelcomePage__ImageCarousel"></div>
            <div className="WelcomePage__NameAndRating">
                <p className="WelcomePage__MovieName">Bruce Almighty</p>
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

export default WelcomePage;