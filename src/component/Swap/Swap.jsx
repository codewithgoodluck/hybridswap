import React from 'react'
import { Card, Button, Form} from 'react-bootstrap'
import './Swapcss.scss'
// import "../Navbar/Navbar.scss"
import algo from "../../images/algot.png"
import { Height } from '@material-ui/icons'
import Connect from '../Wallet/Connect'

import InstallAlgo from "../../images/InstallAlgo.svg"
import myAlgo from "../../images/myAlgo.svg"
import SettingsData from "../Navbar/Data/Data"
import Datasetting from "../Navbar/Data/Datasetting"


const Swap = () => {

    return (
    <>
    
    <div className="swapParent">
        <div className="swapInnerParent">
             <span>FROM</span>
         <div className="fromswapIconImage">
             <h6>Algoran</h6>
            <img style={{width:"40px" , height:"40px", objectFit:"cover", marginBottom:"10px"}} src={algo} alt="" />
         </div>
         <form style={{width:"50%"}}>
          <Form.Group className="mb-1" >
           <Form.Control  type="num" placeholder="0.00" />
          <Form.Text className="text-muted">
          </Form.Text>
         </Form.Group>
         </form>
        </div>
      <div className="swapIcon">
      <i class="fas fa-sync-alt fa-lg"></i>
      </div>
      <div className="swapInnerParent2">
             <span>To</span>
        <form className="FormClass" style={{width:"80%"}}>
          <Form.Group className="mb-1" >
           <Form.Control  type="num" placeholder="Select or Token or Paste the ID" />
          <Form.Text className="text-muted">
          </Form.Text>
         </Form.Group>
         </form>
      </div>
    </div>

    <div className="connectSwap navbar-right nav-links ">
    <Connect ></Connect>      
    </div>
    
    </>
    )

}

export default Swap
