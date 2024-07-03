import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePageComponent from '../HomePageComponent/HomePageComponent'
import AboutPageComponent from '../AboutPageComponent/AboutPageComponent'
import CoursePageComponent from '../CoursePageComponent/CoursePageComponent'
import EventPageComponent from '../EventPageComponent/EventPageComponent'

import './NavigationComponet.css';

const NavigationComponet = () => {
  return (
    <Router>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About US</Link></li>
                <li><Link to='/course'>Courses</Link></li>
                <li><Link to='/events'>Events</Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path='/' element={<HomePageComponent/>}/>
            <Route path='/about' element={<AboutPageComponent/>}/>
            <Route path='/course' element={<CoursePageComponent/>}/>
            <Route path='/events' element={<EventPageComponent/>}/>
        </Routes>
    </Router>
  )
}

export default NavigationComponet