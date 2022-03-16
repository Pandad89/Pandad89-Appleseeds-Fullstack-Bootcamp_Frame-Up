import React from "react";

type TranspositionWrapperProps = {
    perspective?: number;
    rotateY?: number;
    scaleX?: number
    translateX?: number
}

const TranspositionWrapper: React.FC<TranspositionWrapperProps> = ({ children, perspective, scaleX, rotateY, translateX }) => {
    return (
        <div  style={{transform: `perspective(${perspective || 0}px) rotateY(${rotateY|| 0}deg) scaleX(${scaleX}) translateX(${translateX}px)`}} className="transposition-element">{children}</div>
    )

}
export default TranspositionWrapper