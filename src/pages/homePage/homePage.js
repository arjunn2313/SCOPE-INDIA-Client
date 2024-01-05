import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'
import Featured from '../../components/featured/featured'
import Aboutus from '../../components/aboutus/aboutus'
import Course from '../../components/course/course'
import Footer from '../../components/footer/footer'

export default function HomePage() {
  return (
    <div style={{width:'100%'}}>
       
        <Header/>
        <Featured/>
        <Aboutus/>
        <Course/>
        <Footer/>
    </div>
  )
}
