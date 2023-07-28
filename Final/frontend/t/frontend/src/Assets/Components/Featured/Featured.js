import React from "react"
import "./Featured.css"
import FeaturedCard from "./FeatureCard"
import Heading from "../common/Heading"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
            <Heading title='Featured Property Types' subtitle='Find All Type of Property.' />
          
            <FeaturedCard />

          
        </div>
      </section>
    </>
  )
}

export default Featured