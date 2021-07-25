import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./ProductItem.css"
import { createAction } from "../store/action/action"

class ProductItem extends Component {
    handleSelectProduct = () => {
        this.props.dispatch(createAction("SELECT_PRODUCT",this.props.item))
    }

    render() {
        const { url } = this.props.item;
        return (
            <div className="image">
                <img onClick={this.handleSelectProduct} src={url} alt=""/>
            </div>
        )
    }
}

export default connect()(ProductItem);