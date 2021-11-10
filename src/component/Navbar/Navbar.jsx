import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {Button,Modal} from "react-bootstrap"
import "./Navbar.scss"
import algo from "../../images/algo1.png"
import InstallAlgo from "../../images/InstallAlgo.svg"
import myAlgo from "../../images/myAlgo.svg"




const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <nav className="navbar">
            <div className="logo-image">
                Logo
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

                    <Link to="/connect" className="connect-wallet">
                      <li>
                     
                      <Button variant="warning" onClick={handleShow}>
                      CONNECT TO WALLET
                     </Button>
                         
                    <Modal show={show} onHide={handleClose}>
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
                       
                      <Modal.Footer >
                      <Button variant="warning" onClick={handleClose}>
                       Close
                      </Button>
                       <Button variant="success" onClick={handleClose}>
                      Save Changes
                   </Button>
                    </Modal.Footer>
                     </Modal>

                      </li>
                    </Link>
                    <Link to="/hamboger" className="hamboger-menue">
                      <li>
                      <i class="fas fa-bars" ></i>
                      </li>

                    </Link>

                    <Link to="/" className="swap">
                      <li>
                      <i class="fas fa-user-cog"></i>
                      </li>
                    </Link>



                </ul>
    
            </div>
        </nav>
    )
}

export default Navbar
