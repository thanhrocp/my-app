import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name : 'Trang chủ',
        to : '/',
        exact : true
    },{
        name : 'Nhân viên',
        to : '/employee-list',
        exact : false
    }
];

const MenuLink = ({lable, to, activeExact}) => {
    var icon = lable == 'Trang chủ' ? 'fa fa-home text-success' : 'fa fa-user text-warning';
    var titleName = lable == 'Trang chủ' ? 'Trang chủ' : 'Quản lý nhân viên';
    return (
        <Route
            path={to}
            exact={activeExact}
            children={({match}) => {
                var active = match ? 'waves-effect waves-dark bg-danger' : '';
                return (
                    <li>
                        <Link className={active} aria-expanded="false" to={to} title={titleName}>
                            <i className={icon} />
                            <span className="hide-menu">{lable}</span>
                        </Link>
                    </li>
                );
            }}
        />
    );
}

class Menu extends Component {
    render() {
        return (
            <aside className="left-sidebar">
                <div className="d-flex no-block nav-text-box align-items-center">
                    <a className="waves-effect waves-dark ml-auto hidden-sm-down"><i className="fa fa-arrows" /></a>
                    <a className="nav-toggler waves-effect waves-dark ml-auto hidden-sm-up"><i className="ti-menu ti-close" /></a>
                </div>
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            { this.showMenu(menus) }
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        lable={menu.name}
                        to={menu.to}
                        activeExact={menu.exact}               
                    />
                )
            });
        }
        return result;
    }
}

export default Menu;
