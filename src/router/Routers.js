import React from "react";
import {Routers, Route, Navigate, Routes} from 'react-router-dom'

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import ThankYou from "../pages/ThankYou";
import EventPlanning from "../components/eventplanning/EventPlanning";
import AboutSection from "../pages/About";
import WeatherForeCastHourly from "../components/forecast/WeatherForecastHourly";
import ImageCard from "../components/eventplanning/imagecard/ImageCard";


const Layout = () => {
    return (
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/tours' element={<Tours />}/>
        <Route path='/tours/:id' element={<TourDetails />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/thank-you' element={<ThankYou />}/>
        <Route path='/tours/search' element={<SearchResultList/>}/>
        <Route path='/event-planning' element={<EventPlanning/>}/>
        <Route path='/about' element={<AboutSection/>}/>
        <Route path='/forecast' element={<WeatherForeCastHourly/>}/>
        <Route path='/event' element={<ImageCard/>}/>
      </Routes>
);
};

export default Layout;