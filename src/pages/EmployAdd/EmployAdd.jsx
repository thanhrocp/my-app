import React, { Component } from 'react';
import api from './../../utils/api';

class EmployeeAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            txtName: '',
            txtGender : '',
            txtBirth : '',
            txtCountry: ''
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var val = target.value;
        this.setState({
            [name] :val
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        var { txtName, txtGender, txtBirth, txtCountry } = this.state;
        api('employees', 'POST', {
            name : txtName,
            gender : txtGender,
            birth : txtBirth,
            country : txtCountry
        }).then(respon => {
            console.log(respon);
        });
    }
    render() {
        var { txtName, txtGender, txtBirth, txtCountry } = this.state;
        return (
            <div className="col-lg-12 col-xlg-12 col-md-12">
                <div className="card">
                    <div className="card-body">
                        <form className="form-horizontal form-material" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label className="col-md-12">Họ và tên</label>
                                <div className="col-md-12">
                                    <input 
                                        type="text" 
                                        name="txtName" 
                                        placeholder="Nhập họ tên của bạn" 
                                        className="form-control form-control-line"
                                        value={txtName}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-12">Giới tính</label>
                                <div className="col-sm-12">
                                    <select 
                                        className="form-control form-control-line" 
                                        name="txtGender"
                                        value={txtGender}
                                        onChange={this.onChange}
                                    >
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example-email" className="col-md-12">Ngày sinh</label>
                                <div className="col-md-12">
                                    <input 
                                        type="date" 
                                        name="txtBirth" 
                                        className="form-control form-control-line" 
                                        id="example-email"
                                        value={txtBirth}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-12">Quê quán</label>
                                <div className="col-md-12">
                                    <input 
                                        type="text" 
                                        name="txtCountry" 
                                        placeholder="Nhập quê quán" 
                                        className="form-control form-control-line"
                                        value={txtCountry}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <button type="submit" className="btn btn-success">Update Profile</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeAdd;
