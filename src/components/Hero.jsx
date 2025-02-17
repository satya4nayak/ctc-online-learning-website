import React from 'react'
import heroImg from '../assets/img/hero-photo.png'

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[45vh] w-full">
    <div className="hero-text-div w-full md:w-1/2 h-auto">
        <div className="container hero-text flex-col justify-center items-center mt-[1%] md:mt-[7%] mb-[3%] mx-auto w-[60%] md:w-[50%]  h-auto border-transparent border-blue-100 box-border border-[0.5px] p-[4%] shadow-lg">
            <h1 className="text-black text-3xl font-bold">Welcome to CTC-Code To Create</h1>
            <p className="text-black text-lg font-thin">The best place to learn and grow, thousands of courses to help you succeed in your goals</p>
        </div>
        <div className="flex mt-auto mx-[28%]">
            <button className="ml-[2%] bg-black hover:bg-gray-700 text-white font-thin px-[7%] py-[2%] border-gray-800 border-[0.5px]">
                Explore
            </button>
            <div className="p-[4%]"></div>
            <button className="bg-black hover:bg-gray-700 text-white font-thin px-[7%] py-[2%] border-gray-800 border-[0.5px]">
               SignUp
            </button>
        </div>
    </div>

    <div className="Hero-img w-full md:w-1/2 grid justify-center items-center h-full">
        <img src={heroImg} alt="Hero" className="hero-img h-[90%] w-[80%]" />
    </div>
</div>

  )
}

export default Hero
