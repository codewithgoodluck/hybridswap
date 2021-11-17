
import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {Button,Modal} from "react-bootstrap"
// import "../Navbar/Navbar.scss"
import algo from "../../images/algo1.png"
import InstallAlgo from "../../images/InstallAlgo.svg"
import myAlgo from "../../images/myAlgo.svg"


const Connect = () => {
     // Modal
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
 
     // Settings Toggle
     const [showSettings, setShowSettings] = useState(false);
     const [showSettingsIcon, setShowSettingsIcon] = useState(false);
 
    return (
        <div className="navbar-right nav-links">
             {/* Connect to start wallet */}
             <Link to="/swap" className="connect-wallet"> 
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
              </Link>  
        </div>
    )
}

export default Connect
