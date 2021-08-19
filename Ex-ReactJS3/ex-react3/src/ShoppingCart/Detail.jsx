import React, { Component } from 'react'
import { connect } from 'react-redux';

class Detail extends Component {
    render() {
        const {name, screen, backCamera, frontCamera, img, desc} = this.props.selectedProduct;
        
        if(Object.keys(this.props.selectedProduct).length !== 0) {
            return (
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-4">
                            <h4>{name}</h4>
                            <img className="w-100" src={img} alt="" />
                        </div>
                        <div className="col-8">
                            <h4>Thông số kĩ thuật</h4>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{screen}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>{frontCamera}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>{backCamera}</td>
                                    </tr>
                                    <tr>
                                        <td>Mô tả</td>
                                        <td>{desc}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        selectedProduct: state.products.selectedProduct
    }
}

export default connect(mapStateToProps)(Detail);