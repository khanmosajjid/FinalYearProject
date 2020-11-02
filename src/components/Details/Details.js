import React,{Component} from 'react';
import {
    Row,
    Col,
    Container
} from 'reactstrap'
import './Details.css'

import gift from '../../assets/gift1.png'

export default class Details extends Component{
     
    render(){
        return(
            <Container className="detail-main">

            
           <Row>
               <Col lg="4">
                  <div className="logo">
                      <img src={gift}></img>

                  </div>
                  <h2>Buy Exclusive</h2>
                  <p style={{color:"darkgrey"}}>Mauris sed ipsum ante. Nunc iaculis odio vitae efficitur risus porttitor. 
                      In porta lorem auctor aliquam vehicula varius libero eleifend.</p>
               </Col>
               <Col lg="4">
               <div className="logo">
                      <img src={gift}></img>

                  </div>
                  <h2>Buy Exclusive</h2>
                  <p style={{color:"darkgrey"}}>Mauris sed ipsum ante. Nunc iaculis odio vitae efficitur risus porttitor. 
                      In porta lorem auctor aliquam vehicula varius libero eleifend.</p>
               </Col>
               <Col lg="4">
               <div className="logo">
                      <img src={gift}></img>

                  </div>
                  <h2>Buy Exclusive</h2>
                  <p style={{color:"darkgrey"}}>Mauris sed ipsum ante. Nunc iaculis odio vitae efficitur risus porttitor. 
                      In porta lorem auctor aliquam vehicula varius libero eleifend.</p>
               </Col>
           </Row>
           </Container>
        )
    }
}