import React, { Component } from 'react';
import Header from '../Header/Header'
import "./Home.css"
import Details from '../Details/Details'

export default class Home extends Component{
    
    render(){
        return(
            <div className="home-main">
                 
                 <Header></Header>
                 <Details></Details>


            </div>
        )
    }
}