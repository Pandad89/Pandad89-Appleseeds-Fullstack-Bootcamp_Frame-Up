import React, { useState } from "react"
import { mockCarouselListItems } from "../../WelcomePage.constants"
import { I_CarouselListItem } from "../../WelcomePage.types"
import CarouselList from "../CarouselList/CarouselList"

type CarouselProps = {
}



const Carousel: React.FC<CarouselProps> = (props) => {
    const [list, setList] = useState(mockCarouselListItems as I_CarouselListItem[])
    const [nextStep, setNextStep] = useState(2)
    const [prevStep, setPrevStep] = useState(0)
    const [currentStep, setCurrentStep] = useState(1)


    const moveToNextStepWithEdgeCases = (list: any[]) => {
        setNextStep(nextStep + 1)
        setPrevStep(prevStep + 1)
        setCurrentStep(currentStep + 1)
        if (nextStep === list.length - 1) {
            setNextStep(0)
        }
        if (currentStep === list.length - 1) {
            setCurrentStep(0)
        }
        if (prevStep === list.length - 1) {
            setPrevStep(0)
        }

    }
    const moveToPrevStepWithEdgeCases = (list: any[]) => {
        setNextStep(nextStep - 1)
        setPrevStep(prevStep - 1)
        setCurrentStep(currentStep - 1)
        if (nextStep === 0) {
            setNextStep(list.length - 1)
        }
        if (currentStep === 0) {
            setCurrentStep(list.length - 1)
        }
        if (prevStep === 0) {
            setPrevStep(list.length - 1)
        }

    }


    const stepper = (moveType: 'next' | 'prev') => {
        if (moveType === "next") {
            moveToNextStepWithEdgeCases(list)
        }
        if (moveType === "prev") {
            moveToPrevStepWithEdgeCases(list)

        }
    }
    return (
        <div className="WelcomePage_Carousel">
            <button onClick={() => stepper("prev")} className="WlecomePage__Carousel-button WelcomePage__Carousel-prev-button">Prev</button>
            <button onClick={() => stepper("next")} className="WlecomePage__Carousel-button WelcomePage__Carousel-next-button">Next</button>
            <CarouselList list={list} nextStep={nextStep} prevStep={prevStep} currentStep={currentStep} />
        </div>
    )
}

export default Carousel