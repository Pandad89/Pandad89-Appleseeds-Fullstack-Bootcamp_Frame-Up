import React from "react"


type TranpositionProps = {
    perspective: number;
    translateX: number;
    rotateY: number;

}

const Transposition: React.FC<TranpositionProps> = ({ children, perspective, rotateY, translateX }) => {
    return <div style={{zIndex:-1, transform: `perspective(${perspective}px) translateX(${translateX}%) rotateY(${rotateY}deg)`, transition:`2s ease-in-out` }} >{children}</div>
}


export default Transposition