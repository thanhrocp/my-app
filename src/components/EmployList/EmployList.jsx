import React, { Component } from 'react';

class EmployList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Basic Table</h4>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#No</th>
                                            <th>Họ và tên</th>
                                            <th>Giới tính</th>
                                            <th>Ngày sinh</th>
                                            <th>Quê quán</th>
                                            <th>Cập nhật</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td><input className="form-control" placeholder="Nhập tên cần tìm" /></td>
                                            <td>
                                                <select className="form-control">
                                                    <option value={-1}>--- Tất cả ---</option>
                                                    <option value={1}>- Nam</option>
                                                    <option value={0}>- Nữ</option>
                                                </select>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        {this.props.children}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployList;
