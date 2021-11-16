import React from 'react'
import { BrowserRouter as Router,Link, Routes, Route } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import '../../component/Navbar/Navbar.scss'
import Pool from '../../component/Pool/Pool';
import Swap from '../../component/Swap/Swap';
import Connect from '../../component/Wallet/Connect';
import imagetwo from "../../images/imageBody/img2.svg"
import imageSwap from "../../images/imageBody/img3.svg"
function Home() {
    return (
        <div className="home">
            <Router>
                <Navbar></Navbar>
                {/* <Swap></Swap> */}
                <Pool></Pool>
            </Router>
        <div className="imageSwap">
            <div className="img">
            <img className="img2" src={imagetwo} />
            </div>
            <div className="img">
            <img src={imageSwap} alt="" />
            </div>
         </div>
        </div>
    );
}

export default Home
