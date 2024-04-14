/* eslint-disable @next/next/no-img-element */
"use client"

import {TypeAnimation} from "react-type-animation"
const Hero = () => {
  return (
    <div id="hero" className=" -z-10 relative grid overflow-hidden grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8">
      <img className=" absolute z-[-1] hidden md:block lg:block w-[400px] bottom-0 left-[-170px]" src={"/notebookL.png"} alt=""  />
      <img className=" absolute z-[-1] w-[400px] bottom-0 left-[320px]" src={"/notebookM.png"} alt="" />
      <img className=" absolute z-[-1] w-[200px] bottom-[450px] left-[450px]" src={"/mobileR.png"} alt="" />

      <div className=" glass z-50 md:z-0 lg:0 px-5 col-span-2 my-auto ">
        <h1 className=" text-white text-4xl lg:text-8xl font-extrabold">
           <p className=" my-4 text-gray-500">{"I'm a"}</p>
            <TypeAnimation
            sequence={[
              "Frontend Dev.",
              1000,
              "Student",
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />
        </h1>
        <p className="  my-6 font-bold  sm:text-lg lg:text-xl max-w-[200px] md:max-w-[600px] ml-1 text-gray-300">
            My name is Kartik and I am a Frontend Developer.
        </p>
      </div>


      <div className=" absolute bottom-12 md:bottom-0 lg:bottom-0 w-[200px] right-0 lg:w-[600px]">
        <img  src={ "/profilepic.png"} alt="" />
      </div>
    </div>
  )
}

export default Hero
