import React, { Component } from 'react'
import Model from './Model'
import ProductList from './ProductList'

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid" id="home" 
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(./assets/glassesImage/background.jpg)",
                backgroundSize: "cover",
            }}>
                <div className="container-fluid pt-4 pb-4 text-center"
                style={{
                    background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
                    color: "white",
                    width: "100%"
                }}>
                    <h3>TRY GLASSES APP ONLINE</h3>
                </div>
                <div className="body">
                    <Model></Model>
                    <ProductList></ProductList>
                </div>
                <div className="footer" style={{height:"25px"}}></div>
            </div>
        )
    }
}
