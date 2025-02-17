import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MultipleCard from '../components/MultipleCard'
import CourseDisplay from '../components/CourseDisplay'

const HomPage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <MultipleCard />
            <CourseDisplay />
        </div>
    )
}

export default HomPage
