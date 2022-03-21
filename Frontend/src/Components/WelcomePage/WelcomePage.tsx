import React, { useState } from "react"
import "./WelcomePage.css"
import Carousel from "./Components/Carousel/Carousel"

type WelcomePageProps = {
}



const WelcomePage: React.FC<WelcomePageProps> = (props) => {
  
    return <div className="WelcomePage__Container">
        <div className="WelcomePage__Carousel-Container">
            <Carousel />
        </div>
    </div>
}


export default WelcomePage

