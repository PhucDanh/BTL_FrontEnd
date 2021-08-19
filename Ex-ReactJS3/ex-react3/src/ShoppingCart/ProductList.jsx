import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProductItem from './ProductItem'

class ProductList extends Component {
    renderProducts = () => {
        const productsHTML = this.props.productList.map((item) => {
            return (
                <div key={item.id} className="col-3">
                    <ProductItem prod={item}/>
                </div>
            );
        });
        return productsHTML;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProducts()}
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
