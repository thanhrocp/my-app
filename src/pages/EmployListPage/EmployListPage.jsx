import React, { Component } from 'react';
import EmployList from './../../components/EmployList/EmployList';
import EmployItem from './../../components/EmployItem/EmployItem';
import { connect } from 'react-redux';

class EmployListPage extends Component {
    render() {
        var { employees } = this.props;
        return (
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-12 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <button type="button" className="btn btn-success"> Add Employee</button>
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
