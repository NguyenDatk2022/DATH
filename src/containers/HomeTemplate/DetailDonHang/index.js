import React, { Component } from 'react';
import { actFetchDetailDonHang } from './modules/actions';
import {connect} from "react-redux";
import Loader from "./../../../component/Loader";

class DetailDonHangPage extends Component {
    componentDidMount(){
        console.log(this.props);
        const id = this.props.match.params.id;
        const idJson = {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                id: id,
            })
        }
        console.log(idJson.body)
        this.props.fetchDetailDonHang(idJson);
    }

  render() {
    const {loading, data} = this.props;
    if(loading) return <Loader/>;
    return (
      <div className='ml-4 mr-4'>
        <h3>Khách Hàng: {data && data.tenKhachHang}</h3>
        <div className='shadow p-3 mb-5 bg-white rounded'>
            <div className='row'>
                <div className='col-sm bg-light ml-4 mr-4'>
                    <h4>Thông tin đơn hàng</h4>
                    <table className='pd-10'>
                        <tr>
                            <th>
                                <h5 className='mt-3'>Khách hàng</h5>
                            </th>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>{data && data.tenKhachHang}</td>
                        </tr>

                        <tr>
                            <th>
                                <h5 className='mt-3'>Số điện thoại</h5>
                            </th>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>{data && data.soDT}</td>
                        </tr>

                        <tr>
                            <th>
                                <h5 className='mt-3'>Địa chỉ</h5>
                            </th>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>{data && data.diaChi}</td>
                        </tr>

                        <tr>
                            <th>
                                <h5 className='mt-3'>Ngày tạo</h5>
                            </th>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>{data && data.ngayTaoDon}</td>
                        </tr>

                        <tr>
                            <th>
                                <h5 className='mt-3'>Hình thức thanh toán</h5>
                            </th>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>{data && data.hinhThucThanhToan}</td>
                        </tr>
                        
                    </table>
                </div>
                <div className='col-sm'>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>
                                    Đơn giá
                                </th>
                                <th>
                                    Số lượng
                                </th>
                                <th>
                                    Thành tiền
                                </th>
                            </tr>
                            
                            <tr>
                                <td>
                                    {data && data.sanPham}
                                </td>

                                <td>
                                    {data && data.donGia}
                                </td>

                                <td>
                                    {data && data.soLuong}
                                </td>

                                <td>
                                    {data && data.donGia*data.soLuong}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='row'>
                        <div className='col-8 text-right'>
                            <h6>Tổng tiền thanh toán</h6>
                        </div>

                        <div className='col-4 text-left'>
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                {data && data.donGia * data.soLuong}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        loading: state.detailDonHangReducer.loading,
        data: state.detailDonHangReducer.data,
    }
}   

const mapDispatchToProps = (dispatch) => {
    return{
        fetchDetailDonHang: (id) => {
            dispatch(actFetchDetailDonHang(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (DetailDonHangPage);
