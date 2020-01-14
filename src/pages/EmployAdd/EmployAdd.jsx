import React, { Component } from 'react';
import api from './../../utils/api';
import { Link } from 'react-router-dom';
import { actionAddRequest, actionEditRequest, actUpdateDataRequest } from './../../actions/index';
import { connect } from 'react-redux';

class EmployeeAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            txtName: '',
            txtAvatar : '',
            txtGender : 'Nam',
            txtBirth : '',
            txtCountry: ''
        }
    }

    convertDate(inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat)
        return [d.getFullYear(), pad(d.getMonth()+1), pad(d.getDate())].join('/')
    }

    componentDidMount() {
        var { match } = this.props; 
        if (match) {
            var id = match.params.id;
            this.props.editEmployee(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.employEdit) {
            var { employEdit } = nextProps;
            this.setState({
                id : employEdit.id,
                txtName : employEdit.name,
                txtAvatar : employEdit.avatar,
                txtGender : employEdit.gender,
                txtBirth : this.convertDate(employEdit.birth),
                txtCountry : employEdit.country
            })
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

    dateTime () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var hour    = today.getHours();
        var minute  = today.getMinutes();
        var second  = today.getSeconds();
        hour = this.forMatTime(hour);
        second = this.forMatTime(second);
        minute = this.forMatTime(minute);

        today = yyyy + '/' + mm + '/' + dd + " " + hour+":"+minute+":"+second;
        return today;
    }

    forMatTime(h) {
        var s = '';
        if (h < 10 && h != '') {
            s = '0'+ h;
        } else {
            s = h;
        }

        return s;
    }

    isValidDate(dateString) {
        // kiểm tra định dạng ngày, tháng, năm.
        if(!/^\d{4}\/\d{1,2}\/\d{1,2}$/.test(dateString))
            return false;

        // lấy giá trị
        var parts = dateString.split("/");
        var year = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10);
        var day = parseInt(parts[2], 10);

        if(year < 1000 || year > 3000 || month == 0 || month > 12)
            return false;

        var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

        if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
            monthLength[1] = 29;

        // Check the range of the day
        return day > 0 && day <= monthLength[month - 1];
    }

    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        var { id, txtName, txtAvatar, txtGender, txtBirth, txtCountry } = this.state;
        var { history } = this.props;
        if (txtName == '') 
            return alert('Tên không được để trống');
        if (txtBirth == '')
            return alert('Ngày sinh không được để trống');
        if (txtCountry == '') 
            return alert('Quê quán không được để trống');
        if (this.isValidDate(txtBirth))
            txtBirth = txtBirth;
        else return alert('Sai định dạng ngày tháng');
        var employees = {
            id : id,
            name : txtName,
            avatar : txtAvatar,
            gender : txtGender,
            birth : txtBirth,
            country : txtCountry,
            update_date : this.dateTime()
        }
        if(id) {
            this.props.updateData(employees);
        } else {
            this.props.addEmployee(employees);
        }
        history.goBack();
    }

    render() {
        var { txtName, txtGender, txtBirth, txtCountry, txtAvatar } = this.state;
        return (
            <div className="col-lg-12 col-xlg-12 col-md-12">
                <div className="card">
                    <div className="card-header bg-success text-white">
                        Thêm mới nhân viên
                    </div>
                    <div className="card-body">
                        <Link type="button" className="btn btn-success" to="/employee-list">Quay lại</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form className="form-horizontal form-material" onSubmit={this.onSubmit} enctype="multipart/form-data">
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
                                <label className="col-sm-12">Ảnh nhân vật</label>
                                <div className="col-sm-12">
                                    <input 
                                        type="text" 
                                        name="txtAvatar" 
                                        placeholder="URL Img or Image name" 
                                        className="form-control form-control-line"
                                        value={txtAvatar}
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
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example-email" className="col-md-12">Ngày sinh</label>
                                <div className="col-md-12">
                                    <input 
                                        type="text" 
                                        name="txtBirth"
                                        className="form-control form-control-line" 
                                        id="datepicker"
                                        value={txtBirth}
                                        placeholder="YYYY/MM/DD"
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
                                    <button type="submit" className="btn btn-warning">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        employEdit : state.employEdit
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addEmployee : (employees) => {
            dispatch(actionAddRequest(employees));
        },
        editEmployee : (id) => {
            dispatch(actionEditRequest(id));
        },
        updateData : (employees) => {
            dispatch(actUpdateDataRequest(employees));
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeAdd);
