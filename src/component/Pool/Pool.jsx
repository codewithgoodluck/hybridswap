import React from 'react'
import "../Pool/Pool.scss"
import { Card, Button, Col, Container, Row } from 'react-bootstrap'

const Pool = () => {
    return (
        
        <Card className="text-center">
         <Card.Header >Featured</Card.Header>
        <Card.Body>
         <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
         With supporting text below as a natural lead-in to additional content.
         </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    //     <Container>
    //     <Row className="justify-content-md-center pt-5">
    //     <Col xs  lg="6">
    //         <div>
    //             <div>
    //             <span>Liquidity provider rewards</span>
    //             <p>Liquidity providers earn a 0.25% fee on all trades proportional to 
    //                 their share of the pool. Fees are added to the pool, accrue in real
    //                  time and can be claimed by withdrawing your liquidity.
    //              </p>
    //              <button>Learn more about providing liquidity</button>

    //             </div>
                
    //         </div>
    //      1 of 3
    //      </Col>
    //    </Row>
    //     </Container>
    
    )
}

export default Pool
