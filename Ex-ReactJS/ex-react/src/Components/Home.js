import React, { Component } from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'
import Smartphone from './Smartphone'
import "./Home.css"
import Laptop from './Laptop'
import Promotion from './Promotion'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Carousel></Carousel>
                <Smartphone></Smartphone>
                <Laptop></Laptop>
                <Promotion></Promotion>
            </div>
        )
    }
}
