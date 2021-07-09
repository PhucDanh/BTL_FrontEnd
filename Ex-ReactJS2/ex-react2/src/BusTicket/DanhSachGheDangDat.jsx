import React, { Component } from 'react'

export default class DanhSachGheDangDat extends Component {
    renderGheDangDat = () => {
        const gheDangDatHTML = this.props.danhSachGheDangDat.map((item) => {
            const { TenGhe, Gia } = item;
            return (
                <div key={item.SoGhe} className="row" style={{fontSize:"20px"}}>
                    <div className="col-4">
                        <p>Ghế: {TenGhe} ${Gia}</p>
                    </div>
                    <div className="col-8">
                        <span className="text-danger">[Hủy]</span>
                        <span className="text-danger ml-2">[Đặt]</span>
                    </div>        
                </div>
            )
        });
        return gheDangDatHTML;
    }
    render() {
        return (
            <div className="container">
                <h3 style={{color: "#DAA520"}}>Danh sách ghế đã đặt ({this.props.danhSachGheDangDat.length})</h3>
                {this.renderGheDangDat()}
            </div>
        )
    }
}
