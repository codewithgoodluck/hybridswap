import React from 'react'
import { BrowserRouter as Router,Link, Routes, Route } from 'react-router-dom';
import SettingsData from '../../component/Navbar/Data/Data';
import Navbar from '../../component/Navbar/Navbar';
import '../../component/Navbar/Navbar.scss'
import styled from "styled-components";

// const ContainerParent=styled.div`
// position:relative;
// `

// const Container = styled.div`
// position:absolute;
// top:70px;
// right:20px;
// width:9%;
// // display:none;

// `



const Home = () => {
    return (
        <div>

            <Router>
            <Navbar></Navbar>
           
            {/* <Container >
            {/* <SettingsData>
           
            </SettingsData> */}
            {/* </Container> */} 
            </Router>
            
        </div>
    )
}

export default Home
