import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from './Cart'
import Detail from './Detail'
import ProductList from './ProductList'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>Bài tập giỏ hàng</h1>
                <p data-toggle="modal" data-target="#modelId" className="text-center">Giỏ hàng: {this.props.totalQuantity}</p>
                <ProductList></ProductList>
                <Detail></Detail>
                <Cart></Cart>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        totalQuantity: state.cart.totalQuantity
    }
} 

export default connect(mapStateToProps)(Home)