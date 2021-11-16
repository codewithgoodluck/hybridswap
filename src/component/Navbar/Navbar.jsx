import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {Button,Modal} from "react-bootstrap"
import "./Navbar.scss"
import hybridswaplogo from "../../images/logowhite.png"
import algo from "../../images/algo1.png"
import InstallAlgo from "../../images/InstallAlgo.svg"
import myAlgo from "../../images/myAlgo.svg"
import SettingsData from "../Navbar/Data/Data"
import Datasetting from "../Navbar/Data/Datasetting"
import Connect from '../Wallet/Connect'


const Navbar = ({stylechec}) => {
    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Settings Toggle
    const [showSettings, setShowSettings] = useState(false);
    const [showSettingsIcon, setShowSettingsIcon] = useState(false);

    
   

    return (
        <div className="navbar">
            <div className="logo-image">
              {/* <span>HybridSwap</span> */}
              <img src={hybridswaplogo } alt="" />
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                <Link to="/" className="swap">
                      <li>
                          HybridPad
                          <span> <i class="fas fa-rocket fa-lg"></i></span>
                         
                      </li>
                     
                    </Link>


                    <Link to="/" className="swap">
                      <li>
                          SWAP
                      </li>
                    </Link>

                    <Link to="/pool" className="pool">
                      <li>
                          POOL
                      </li>
                      </Link>

                      <Link to="/pool" className="pool">
                      <li>
                      ANALYTICS
                      </li>
                      </Link>



                     
              
                  {/* setting Menue */}
                    <span  className="icon-settings" onClick={()=>setShowSettingsIcon (!showSettingsIcon)
                         }>
                      {/* toggle icon on click */}
                      <div >
                      <i class="fas fa-user-cog fa-lg" ></i>
                      </div>
                      {/* condition to show icon onclick */}
                      {
                        showSettingsIcon ?
                        <div className="component-settings">
                        <Datasetting/>
                        </div> : null
                      }
                    </span>
                    {/* hambo */}
                    <span  className="icon-settings" onClick={()=>setShowSettings(!showSettings, "navbarAnimation")
                            
                         }>
                      {/* toggle icon on click */}
                      <div>
                      <i class="fas fa-bars fa-lg" ></i>
                      </div>
                      {/* condition to show icon onclick */}
                      {
                        showSettings ?
                        <div className="component-settings">
                          {console.log(showSettings)}
                        <SettingsData/>
                        </div> : null
                      }
                    </span>
                </ul>
            </div>
            <div className="navbar-right connect-wallect nav-links">
                    <Connect></Connect> 
             </div>
      

             

        </div>
        
    )
}

export default Navbar
