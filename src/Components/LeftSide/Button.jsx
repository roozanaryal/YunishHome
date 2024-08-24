import React from 'react'

function Button({
  children,
  type = "button",
  txt = "text-white",
  className = "",
  onClick,
  ...props
  
}) {
  return (
    <>
    <button
         className={` ${txt}  ${className} {...props}`}
         onClick={onClick}
      >
         {children}
      </button>
    </>
  )
}

export default Button