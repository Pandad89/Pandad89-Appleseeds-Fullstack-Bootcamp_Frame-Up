import React, { useState } from "react"
import { I_CarouselListItem } from "../../WelcomePage.types"
import Transposition from "../Atoms/Transposition";





type ItemProps = {
    title: string,
    imageUrl: string;
    rating: number
}

const Item: React.FC<ItemProps> = ({ imageUrl, rating, title }) => {
    const stars = Array(5).fill("star")
    return (


        <div className="WelcomePage_Carousel-Item">
            <img src={imageUrl} alt="" className="WelcomePage_Carousel-Item-Image" />
            <p className="WelcomePage__Carousel-Item-Name">{title}</p>
            <ul className="WelcomePage__Carousel-Item-Rating">
                {stars.map((star: string, index: number) => {
                    const color = index + 1 > rating ? "gray" : "yellow"
                    return (
                        <li style={{ color }} className="WelcomePage__Carousel-Item-Rating-Icon">{star}</li>
                    )
                })}
            </ul>
        </div>
    )
}



type CarouselListProps = {
    list: I_CarouselListItem[];
    nextStep: number;
    prevStep: number;
    currentStep: number
}


const CarouselList: React.FC<CarouselListProps> = ({ list, currentStep, nextStep, prevStep }) => {
    return (
        <div className="WelcomePage__Carousel-List">
            <Transposition perspective={15} rotateY={1} translateX={10} >
                <Item {...list[prevStep]} />

            </Transposition>

            <Item {...list[currentStep]} />


            <Transposition perspective={10} rotateY={359} translateX={-14}>
                <Item {...list[nextStep]} />

            </Transposition>

        </div>
    )
}

export default CarouselList