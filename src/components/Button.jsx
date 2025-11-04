import React from 'react'

const Button = ({
    label,
    onClick,
    type = 'button',
    children,
}) => {
  return (
    <button 
        type={type} 
        onClick={onClick} 
        className="bg-primary text-black font-robotoMono px-4 py-2 rounded hover:bg-secondary transition"
    >
      {label || children}
    </button>
  )
}

export default Button
