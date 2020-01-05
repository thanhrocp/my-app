import React, { Component } from 'react';
import EmployList from './../../components/EmployList/EmployList';
import EmployItem from './../../components/EmployItem/EmployItem';
import { connect } from 'react-redux';
import axios from 'axios';
import api from './../../utils/api';
import { Link } from 'react-router-dom';

class EmployListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees : []
        }
    }
    //call sau khi component render lần đầu
    componentDidMount() {
        api('employees', 'GET', null).then(respon => {
            this.setState({
                employees: respon.data
            })
        });
    }
    render() {
        var { employees } = this.state;

        return (
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-12 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <Link to="/employee-add" type="button" className="btn btn-success"> Add Employee</Link>
                            </ol>
                        </div>
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

export default connect(mapStateProps, null)(EmployListPage);
