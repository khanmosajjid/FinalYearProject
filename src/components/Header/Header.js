import React, { Component } from "react";
import image from "../../assets/home.jpg";
import "./Header.css";
import { Row, 
    Col, Container,
     Button,Breadcrumb,
     BreadcrumbItem } from "reactstrap";
import NavBar from '../NavBar/Navbar'
export default class Header extends Component {
  render() {
    return (
        <div className="main">

        
      <Container >
        <Row className="main__header">
          <Col lg="6" className="logo">
            <h1>Makery</h1>
          </Col>
          <Col lg="6" className="header-btn">
            <Button outline color="primary">Sign in</Button>
            <span> </span>
            <Button color="danger">Register</Button>
          </Col>
        </Row>
        <Row className="menu-bar">

        <Col lg="12" className="menu-nav">
        
               <NavBar></NavBar>
        
        </Col>

       
     

        </Row>
        <Row>
            <Col className="descrp">
            <h1>Awesome Handmade items from people around the world</h1>
            </Col>
        </Row>
        <Row className="sell-btn">
            <Col>
            <Button outline color="primary">Browse Item</Button>
            <span> </span>
            <Button color="danger">Start selling</Button>
            </Col>
        </Row>
      </Container>
      </div>
    );
  }
}
