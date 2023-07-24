import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className='headig'>
        <h1 className="di">{title}</h1>
        <p className="pv">{subtitle}</p>
      </div>
    </>
  )
}

export default Heading