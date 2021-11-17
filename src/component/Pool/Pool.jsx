import React from 'react'
import "../Pool/Pool.scss"
import { MDBCard,MDBRow,MDBCardHeader, MDBCardFooter, MDBCol, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


const Pool = () => {

  const poolsDatas =[
    {name:"USDC/ALGO", tvl:"$7.34M", volume24H:"$825.95K", volume7D:"$8.39M", fees24H:"$2.49K"},
    {name:"USDC / ALGO", tvl:"$7.34M", volume24H:"$825.95K", volume7D:"$8.39M", fees24H:"$2.49K"},
    {name:"USDC / ALGO", tvl:"$7.34M", volume24H:"$825.95K", volume7D:"$8.39M", fees24H:"$2.49K"}
  ]


  const renderPoolsdata = (poolsData, index) =>{
    <MDBTableHead light>
        <tr key={index}>
          <td scope='col'>{poolsData.name}</td>
          <td scope='col'>{poolsData.volume24H}</td>
          <td scope='col'>{poolsData. volume7D}</td>
          <td scope='col'>{poolsData.fees24H}</td>
          <td scope='col'>{poolsData.fees24H}</td>
        </tr>
      </MDBTableHead>
  }

 
    return (
        <div>
             {/* // liquidity section */}
        <MDBCard style={{ maxWidth: '70rem', border:"none", marginLeft:"25%",marginTop:"5%", }}>
        <MDBCardBody>
          <MDBCardTitle className="title" >Liquidity provider rewards</MDBCardTitle>
          <MDBCardText>
          Liquidity providers earn a 0.25% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.
          </MDBCardText>
          <MDBCardText>
          Learn more about providing liquidity
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

    {/* // create liquidty section */}

    <MDBCard alignment='center' style={{ maxWidth: '50rem', border:"none", marginLeft:"20%",marginTop:"1%" }}>
      <MDBCardBody>
        <MDBCardTitle className="miniTitle">Your liquidity</MDBCardTitle>
        <MDBCardText> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut? 
              porro quis nisi veniam odio?</MDBCardText>
      </MDBCardBody>
      
    </MDBCard>

    <MDBRow style={{ maxWidth: '50rem', border:"none", marginLeft:"20%",marginTop:"1%" }}>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle className="miniTitle">Why add Liquidity? </MDBCardTitle>
            <MDBCardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut? 
              porro quis nisi veniam odio?
            </MDBCardText>
             <button style={{color:"#011936FF ", backgroundColor: "#F9DC5CFF", border:"none"}}> Create a Pair </button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle className="miniTitle">Why Create a Pair?</MDBCardTitle>
            <MDBCardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut? porro quis nisi veniam odio?
            </MDBCardText>
            <button style={{color:"#011936FF ", backgroundColor: "#F9DC5CFF", border:"none"}}> Add Liquidity </button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>

    {/* liquidity founc page */}
    <MDBCard style={{ width: '18rem' }} style={{ maxWidth: '50rem',  marginLeft:"21%",marginTop:"1%", textAlign:"center" }}>
      <MDBCardBody>
        <MDBCardText className="miniTitle">No Liquidity Found</MDBCardText>
      </MDBCardBody>
    </MDBCard>

    {/* Pools Table */}

    <MDBCard style={{ width: '18rem' }} style={{ maxWidth: '50rem',  border:"none", marginLeft:"21%",marginTop:"1%", textAlign:"center" }}>
      <MDBCardBody>
        <MDBCardText className="title" >Popular Pools</MDBCardText>
      </MDBCardBody>
    </MDBCard>

    <MDBTable bordered style={{ width: '18rem' }} style={{ maxWidth: '50rem',  marginLeft:"21%",marginTop:"1%", textAlign:"center" }}>
    <MDBTable>
      <MDBTableHead light>
        <tr>
          <th scope='col'>NAME</th>
          <th scope='col'>TVL</th>
          <th scope='col'>VOLUME [24H]</th>
          <th scope='col'>VOLUME [7D]</th>
          <th scope='col'>FEES [24H]</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {poolsDatas.map(renderPoolsdata)}
     
      </MDBTableBody>
    </MDBTable>

    </MDBTable>

        </div>
       



    )
}

export default Pool
