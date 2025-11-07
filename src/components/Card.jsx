import React from 'react'

const Card = ({
    children, 
    color = "",
    border = ""
}) => {
    return (
        <div className={`card ${color} ${border}`}>
            {children}
        </div>
    )
}

export default Card
