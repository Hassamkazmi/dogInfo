import React, { Fragment } from 'react'
import Slider from '../Components/Slider'
import Section from '../Components/Section'

const home = () => {
  return (
    <Fragment>
      <Slider />
      <h2 className='heading'>Top American  Breed</h2>
      <Section />
    </Fragment>
  )
}

export default home