import React, { Component } from 'react'
import { connect } from 'react-redux'

class Model extends Component {
    render() {
        const { name, url, desc } = this.props.selectedProduct;
        return (
            <div className="container mt-4 mb-5" 
            style={{
                background: "url(./assets/glassesImage/model.jpg)",
                backgroundSize: "cover",
                height: "400px",
                width: "300px",
                margin: "0 auto",
                position: "relative",
                zIndex: "1"
            }}>
                <div style={{
                    backgroundImage:`url(${url})`,
                    backgroundSize: "cantain",
                    backgroundRepeat: "no-repeat",
                    width: "450px",
                    height: "150px",
                    position: "absolute",
                    top: "62px",
                    left: "-48px",
                    transform: "scale(0.5)",
                    opacity: "0.7",
                    zIndex: "1"
                }}/>
                <div className="content" 
                style={Object.keys(this.props.selectedProduct).length !== 0 
                    ? {
                    backgroundColor: "rgba(255, 140, 0, 0.5)",
                    position:"absolute",
                    bottom:"0", 
                    left: "0",
                    padding: "5px 20px 0px 20px"
                    } : null
                }>
                    <h3 style={{color:"#9932cc"}}>{name}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedProduct: state.products.selectedProduct
    }
}

export default connect(mapStateToProps)(Model);
