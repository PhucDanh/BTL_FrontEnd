import React, { Component } from 'react'
import GheItem from './GheItem'

export default class DanhSachGhe extends Component {
    render() {
        return (
            <div className="container">
                <button className="mb-3" style={{width: "88%", height: "60px"}} disabled>
                    <h4 className="text-center">Tài xế</h4>
                </button>
                <GheItem danhSachGhe={this.props.danhSachGhe} addDanhSachDangDat={this.props.addDanhSachDangDat}></GheItem>
            </div>
        )
    }
}
