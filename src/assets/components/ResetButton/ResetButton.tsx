import React from "react";
import "./ResetButton.css"

interface ResetProps {
    onClick: () => void
}

const ResetButton: React.FC<ResetProps> = ({onClick}) => {
    return (
        <button className="reset-button" onClick={onClick}>
            Reset 
        </button>
    )
}

export default ResetButton