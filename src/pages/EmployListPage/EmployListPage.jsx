import React, { Component } from 'react';
import EmployList from './../../components/EmployList/EmployList';
import EmployItem from './../../components/EmployItem/EmployItem';
import { connect } from 'react-redux';
import axios from 'axios';
import api from './../../utils/api';
import { Link } from 'react-router-dom';
import { actionFetchRequest, actionDeleteRequest } from './../../actions/index';

class EmployListPage extends Component {
    constructor(props) {
        super(props);
    }
    //call sau khi component render lần đầu
    componentDidMount() {
        this.props.getAllData();
    }

    onDetele = (id) => {
        // var { employees } =  this.state;
        // api(`employees/${id}`, 'DELETE', null).then(respon => {
        //     if (respon.status === 200) {
        //         var idex = this.findId(employees, id);
        //         if (idex !== -1) {
        //             employees.splice(idex, 1);
        //             this.setState({
        //                 employees: employees
        //             })
        //         }
        //     }
        // });
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
                        <Link to="/employee-add" type="button" className="btn btn-success"> Thêm mới</Link>
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
