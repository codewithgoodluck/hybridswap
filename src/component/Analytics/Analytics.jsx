import React from 'react'
import "../Analytics/Analytics.scss"
import { MDBCard,MDBRow,MDBCardHeader, MDBCardFooter, MDBCol, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


const Analytics = () => {
 



 
    return (
        <div>
             {/* // liquidity section */}
        <MDBCard style={{ maxWidth: '50rem',  border:"none", marginLeft:"15%",marginTop:"5%", }}>
        <MDBCardBody>
        <div class="form-outline" style={{marginBottom:"40px"}}>
        <input type="email" id="typeEmail" placeholder="Search a name or paste address" class="form-control" /
        >
          </div>
          <MDBCardTitle className="title" >Warning!</MDBCardTitle>
          <MDBCardText>
          This analytics data is a work in progress. The numbers shown are not necessarily currently accurate. Please consult other price sources before making any trading decisions.
          </MDBCardText>
          <MDBCardText>
          Learn more about providing liquidity
          </MDBCardText>
        </MDBCardBody>

    <MDBTable bordered style={{ width: '18rem' }} style={{ maxWidth: '50rem',  marginLeft:"21%",marginTop:"5%", textAlign:"center" }}>
    <MDBTable>
      <MDBTableHead light>
        <tr>
          <th scope='col'>Total Liquidity</th>
          <th scope='col'>TVL</th>
          <th scope='col'>Volume (24h)</th>
          <th scope='col'>$ALGO Price (24h)</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      </MDBTableBody>
    </MDBTable>

    </MDBTable>
      </MDBCard>

  

    {/* // create liquidty section */}

    <MDBCard alignment='center' style={{ maxWidth: '50rem', border:"none", marginLeft:"20%",marginTop:"1%" }}>
      <MDBCardBody>
        <MDBCardTitle className="miniTitle">Your liquidity</MDBCardTitle>
        <MDBCardText> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut? 
              porro quis nisi veniam odio?</MDBCardText>
      </MDBCardBody>
      
    </MDBCard>

    {/* Pools  */}

    <MDBCard style={{ width: '18rem' }} style={{ maxWidth: '50rem',  border:"none", marginLeft:"21%",marginTop:"1%", textAlign:"center" }}>
      <MDBCardBody>
        <MDBCardText className="title" >Pools</MDBCardText>
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
     
      </MDBTableBody>
    </MDBTable>

    </MDBTable>


     {/* Pools  */}

     <MDBCard style={{ width: '18rem' }} style={{ maxWidth: '50rem',  border:"none", marginLeft:"21%",marginTop:"1%", textAlign:"center" }}>
      <MDBCardBody>
        <MDBCardText className="title" >Assets</MDBCardText>
      </MDBCardBody>
    </MDBCard>

    <MDBTable bordered style={{ width: '18rem' }} style={{ maxWidth: '50rem',  marginLeft:"21%",marginTop:"1%", textAlign:"center" }}>
    <MDBTable>
      <MDBTableHead light>
        <tr>
          <th scope='col'>NAME</th>
          <th scope='col'>TVL</th>
          <th scope='col'>VOLUME [24H]</th>
          <th scope='col'>PRICE</th>
          <th scope='col'>PRICE CHANGE</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
     
      </MDBTableBody>
    </MDBTable>

    </MDBTable>

    </div>
       
        
       



    )
}

export default Analytics
