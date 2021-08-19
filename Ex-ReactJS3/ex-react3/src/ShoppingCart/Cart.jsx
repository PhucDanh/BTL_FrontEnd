import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createAction } from '../store/action/action';

class Cart extends Component {
    handleIncrease = (id) => {
        return () => {
            this.props.dispatch(createAction(
                "INCREASE_ITEM_QUANTITY",
                {id: id}
            ))
        }
    }

    handleDecrease = (id) => {
        return () => {
            this.props.dispatch(createAction(
                "DECREASE_ITEM_QUANTITY",
                {id: id}
            ))
        }
    }

    deleteCartItem = (id) => {
        this.props.dispatch(createAction(
            "DELETE_ITEM",
            {id: id}
        ))
    }
    
    renderCart = () => {
        const cartHTML = this.props.cart.map((item) => {
            const {id, name, img, price} = item.product;
            return (
                <tr key={id}>
                    <td>{item.quantity}</td>
                    <td>{name}</td>
                    <td>
                        <img height="120" src={img} alt="product" />
                    </td>
                    <td>
                        <button className="btn btn-info" onClick={this.handleDecrease(id)}>-</button>
                        <span>{item.quantity}</span>
                        <button className="btn btn-info" onClick={this.handleIncrease(id)}>+</button>
                    </td>
                    <td>{price}</td>
                    <td>{price*item.quantity}</td>
                    <td>
                        <button className="btn btn-success" onClick={() => this.deleteCartItem(id)}>Xóa</button>
                    </td>
                </tr>
            )
        });
        return cartHTML;
    }

    render() {
        return (
            // < !--Button trigger modal-- >
            // < !--Modal -->
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Hình ảnh</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá</th>
                                        <th>Thành tiền</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderCart()}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(Cart)