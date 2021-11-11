import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {Button,Modal} from "react-bootstrap"
import "./Navbar.scss"
import algo from "../../images/algo1.png"
import InstallAlgo from "../../images/InstallAlgo.svg"
import myAlgo from "../../images/myAlgo.svg"
import SettingsData from "../Navbar/Data/Data"

const Navbar = ({stylechec}) => {
    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Settings Toggle
    const [showSettings, setShowSettings] = useState(false);
    const handleShowsettings =setShowSettings(true)
    return (
        <div className="navbar">
            <div className="logo-image">
              <span>HybridSwap</span>
                
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
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
                    {/* Connect to start wallet */}
                    <Link to="/connect" className="connect-wallet"> 
                      <li>
                    <button  className="navbar-button" onClick={handleShow}>
                      CONNECT TO WALLET
                    </button>   
                    <Modal className="modal" show={show} onHide={handleClose}>
                   <Modal.Header closeButton>
                   <div className="connect-wallet-modal">
                   <Modal.Title>Connect a wallet</Modal.Title>
                   </div>
                     
                  </Modal.Header>
                 
                     <Modal.Body >
                        <div className="wallet-items">
                            <div className="wallet-item">
                            <img src={algo} />
                             <span>
                             Algorand Mobile Wallet
                             </span>
                            </div>
                            <div className="wallet-item">
                            <img src={InstallAlgo} />
                             <span>
                             My Algo Wallet
                             </span>
                            </div>
                            <div className="wallet-item">
                            <img src={myAlgo} />
                             <span>
                             Install AlgoSigner
                             </span>
                            </div>

                        </div>

                     </Modal.Body>
                    <div className=".connect-wallet-footer">
                      <Modal.Footer >
                      <Button variant="warning" onClick={handleClose}>
                       Close
                      </Button>
                       <Button variant="success" onClick={handleClose}>
                      Save Changes
                     </Button>
                    </Modal.Footer>
                    </div>

                     </Modal>

                      </li>
                    </Link>
                    {/* Connect wallet end */}

                    {/* Hamboger Menue */}
                    <Link to="/hamboger" className="hamboger-menue">
                      <li>
                      <i class="fas fa-bars fa-lg" ></i>
                      </li>
                    </Link>

                    {/* Setting */}
                    
                    <Link to="/" className="icon-settings">
                      {/* toggle icon on click */}
                      <div><li onClick={()=>setShowSettings(!showSettings)}>
                        <i class="fas fa-user-cog fa-lg">
                      </i>
                      </li>
                      </div>

                      {/* condition to show icon onclick */}

                      {
                        showSettings?<div className="component-settings">
                        <SettingsData></SettingsData>
                        </div>:null
                      }
                        
                      
                    </Link>
                    

                </ul>
                

                
    
            </div>

        </div>
        
    )
}

export default Navbar
