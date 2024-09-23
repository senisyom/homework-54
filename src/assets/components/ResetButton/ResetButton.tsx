import React from "react";
import "./ResetButton.css"

interface ResetProps {
    onClick: () => void
}

const ResetButton: React.FC<ResetProps> = ({onClick}) => {
    return (
        <button className="resetButton" onClick={onClick}>
            Reset 
        </button>
    )
}

export default ResetButton