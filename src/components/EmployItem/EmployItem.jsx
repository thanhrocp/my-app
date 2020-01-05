import React, { Component } from 'react';

class EmployItem extends Component {
    render() {
        var {employee, index} = this.props;
        var nameGender = employee.gender;
        var classGender = employee.gender == 'Nam' ? 'info' : 'warning';
        function convertDate(inputFormat) {
            function pad(s) { return (s < 10) ? '0' + s : s; }
            var d = new Date(inputFormat)
            return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
        }
        return (
            <tr>
                <td>{++index}</td>
                <td>{employee.name}</td>
                <td>
                    <span className={`label label-${classGender}`}>
                        { nameGender }
                    </span>
                </td>
                <td>{convertDate(employee.birth)}</td>
                <td>{employee.country}</td>
                <td><span className="label label-warning">Sửa</span> <span className="label label-danger">Xóa</span></td>
            </tr>
        );
    }
}

export default EmployItem;
