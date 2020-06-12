import React from "react"
//import WalkThrough from "./walkthrough" //I think these should be styled now
//import Params from "./params"
//import Code from "./code"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Sandbox = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      <div>scenario1a</div>
      <div>scenario1b example1b</div>
      <div>scenario2 example2</div>
      <div>scenario3a</div>
      <div>scenario3b</div>
      <div>scenario3c</div>
      <div>scenario4</div>
      <div>scenario5</div>
    </Slider>
  )
}

export default Sandbox
