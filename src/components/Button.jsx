import React from 'react'

const Button = ({
    label,
    onClick,
    type = 'button',
    className = '',
    children,
}) => {
  return (
    <button 
        type={type} 
        onClick={onClick} 
        className={`btn ${className}`}
    >
      {label || children}
    </button>
  )
}

export default Button
