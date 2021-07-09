import React, { Component } from 'react'

export default class GheItem extends Component {
    render() {
        // danhSachGhe = this.props.danhSachGhe;
        const renderGheHTML = () => {
            const danhSachGheHTML = this.props.danhSachGhe.map((item) => {
                if(item.TrangThai) {
                    return (
                        <div key={item.SoGhe} className="col-3 mt-2">
                            <button className="btn btn-danger" style={{width:"40px"}} disabled>{item.SoGhe}</button>
                        </div>
                    )
                } else {
                    return (
                        <div key={item.SoGhe} className="col-3 mt-2">
                            <button 
                            className={item.isBooking ? "btn btn-success" : "btn btn-secondary"} 
                            onClick={() => {this.props.addDanhSachDangDat(item)}} 
                            style={{width:"40px"}}>{item.SoGhe}</button>
                        </div>
                    )
                }
            })
            return danhSachGheHTML;
        }
        return (
            <div className="row mx-auto">
                {renderGheHTML()}
            </div>
        )
    }
}
