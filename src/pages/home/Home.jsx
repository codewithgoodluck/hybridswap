import React from 'react'
import { BrowserRouter as Router,Link, Routes, Route } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import '../../component/Navbar/Navbar.scss'
import imagetwo from "../../images/imageBody/img2.svg"
import SwaParent from './Swap/SwaParent';



const Home = () => {
    return (
        <div className="home">
            <Router>
            <Navbar></Navbar>
            <SwaParent></SwaParent>
            </Router>
           
            <img className="img2" src={imagetwo } />
        </div>
    )
}

export default Home
