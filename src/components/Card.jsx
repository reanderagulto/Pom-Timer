import React from 'react'

const Card = ({
    children, 
    color = "",
    border = "none",
    className = ""
}) => {
    return (
        <div className={`card ${color} border-${border} ${className}`}>
            {children}
        </div>
    )
}

export default Card
