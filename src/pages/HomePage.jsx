import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MultipleCard from '../components/MultipleCard'
import CourseCarousel from '../components/CourseCarousel'

const HomPage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <MultipleCard />
            <CourseCarousel />
        </div>
    )
}

export default HomPage
