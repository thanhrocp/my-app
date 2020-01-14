import React, { Component } from 'react';
import App from './../../App.css';
import {Link} from 'react-router-dom';

class EmployItem extends Component {
    onDetele = (id) => {
        if (confirm("Mày có muốn xóa thật không ?")) { /* eslint no-restricted-globals:0 */
            this.props.onDetele(id);
        }
    } 
    render() {
        var {employee, index} = this.props;
        var nameGender = employee.gender;
        var classGender = employee.gender == 'Nam' ? 'info' : 'warning';
        function convertDate(inputFormat) {
            function pad(s) { return (s < 10) ? '0' + s : s; }
            var d = new Date(inputFormat)
            return [d.getFullYear(), pad(d.getMonth()+1), pad(d.getDate())].join('/')
        }
        return (
            <tr>
                <td className="w-5">{++index}</td>
                <td>{employee.name}</td>
                <td>
                    <img src={`upload/image/${employee.avatar}`} width="150px" height="150px" alt="Avatar nhân vật"/>
                </td>
                <td className="w-10">
                    <span className={`label label-${classGender}`}>
                        { nameGender }
                    </span>
                </td>
                <td className="w-10">{convertDate(employee.birth)}</td>
                <td>{employee.country}</td>
                <td className="w-10">{employee.update_date}</td>
                <td className="w-10">
                    <span><Link className="label label-warning cursor-pointer" to={`/employee-edit/${employee.id}/edit`}>Sửa</Link></span>
                    <br/>
                    <span onClick={ () => this.onDetele(employee.id) } className="label label-danger cursor-pointer">Xóa</span>
                </td>
            </tr>
        );
    }
}

export default EmployItem;
