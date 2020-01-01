import React, { Component } from 'react';

class EmployItem extends Component {
    render() {
        var {employee, index} = this.props;
        var nameGender = employee.gender ? 'Nam' : 'Nữ';
        var classGender = employee.gender ? 'info' : 'success';
        return (
            <tr>
                <td>{++index}</td>
                <td>{employee.name}</td>
                <td>
                    <span className={`lable lable-${classGender}`}>
                        { nameGender }
                    </span>
                </td>
                <td>{employee.birth}</td>
                <td>{employee.country}</td>
                <td><span className="label label-warning">Sửa</span> <span className="label label-danger">Xóa</span></td>
            </tr>
        );
    }
}

export default EmployItem;
