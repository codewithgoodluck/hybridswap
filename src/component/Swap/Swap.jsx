import React,{useState} from 'react'
import { Card, Button, Form} from 'react-bootstrap'
import './Swapcss.scss'
import algo from "../../images/algot.png"
import Connect from '../Wallet/Connect'


const Swap = () => {
  const  [active, setActive]=useState(true)

    return (
    <>
    
    <div className="swapParent">
      <div className= {active ? "swapInnerParent ": " changeClass swapInnerParentChange"}>
        <div className="spanChange">
             <span style={{paddingTop:"50px"}}>From</span>
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
        </div>
      <div className="swapIcon">
      <i onClick={()=> setActive(!active)} class="fas fa-sync-alt fa-lg">
      </i>
      </div>
      
      <div className= {active ? "swapInnerParent2": " changeClassTo swapInnerParentChange span "}>
      <div className="spanChange">
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
    </div>

    <div className="connectSwap navbar-right nav-links ">
    <Connect ></Connect>      
    </div>
    
    </>
    )

}

export default Swap
