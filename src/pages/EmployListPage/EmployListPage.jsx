import React, { Component } from 'react';
import EmployList from './../../components/EmployList/EmployList';
import EmployItem from './../../components/EmployItem/EmployItem';
import { connect } from 'react-redux';
import axios from 'axios';
import api from './../../utils/api';
import { Link } from 'react-router-dom';
import { actionFetchRequest, actionDeleteRequest } from './../../actions/index';
import { ExportCSV } from './ExportCSVwhich';

class EmployListPage extends Component {
    constructor(props) {
        super(props);
    }
    //call sau khi component render lần đầu
    componentDidMount() {
        this.props.getAllData();
    }

    onDetele = (id) => {
        this.props.deleteData(id);
    }

    render() {
        var { employees } = this.props;

        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header bg-success text-white">
                        Quản lý danh sách nhân viên
                    </div>
                    <div className="card-body">
                        <Link to="/employee-add" type="button" className="btn btn-success mr-10"> Thêm mới</Link><ExportCSV csvData={employees} fileName="CustomerList"/>
                    </div>
                </div>
                <EmployList>
                    { this.showEmployee(employees) }
                </EmployList>
            </div>
        );
    }
    showEmployee(employees) {
        var result = null;
        if (employees.length > 0) {
            result = employees.map((employee, index) => {
                return (
                    <EmployItem
                        key={index}
                        employee={employee}
                        index={index}
                        onDetele={this.onDetele}
                    />
                );
            });
        }
        return result;
    }
}
const mapStateProps = state => {
    return {
        employees : state.employees
    }
}

const mapDispatch = (dispatch, props) => {
    return {
        getAllData : () => {
            dispatch(actionFetchRequest());
        },
        deleteData : (id) => {
            dispatch(actionDeleteRequest(id));
        }
    }
}

export default connect(mapStateProps, mapDispatch)(EmployListPage);
