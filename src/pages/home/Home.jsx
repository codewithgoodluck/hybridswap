import React from 'react'
import { BrowserRouter as Router,Link, Routes, Route } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';

const Home = () => {
    return (
        <div>
     

            <Router>
            <Navbar></Navbar>
            </Router>
            
        </div>
    )
}

export default Home
