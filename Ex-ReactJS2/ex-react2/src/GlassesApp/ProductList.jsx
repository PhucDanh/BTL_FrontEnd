import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'

class ProductList extends Component {
    renderProductList = () => {
        const productListHTML = this.props.productList.map((item) => {
            return (
                <div key={item.id} className="col-1 ml-4">
                    <ProductItem item={item}></ProductItem>
                </div>
            )
        });
        return productListHTML;
    }

    render() {
        return (
            <div className="container" style={{background: "white"}}>
                <div className="row pt-4 pb-4">
                    {this.renderProductList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.products.productList
    }
}

export default connect(mapStateToProps)(ProductList);
