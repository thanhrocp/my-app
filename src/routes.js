import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import Page404 from './pages/Page404/Page404';
import EmployListPage from './pages/EmployListPage/EmployListPage';
import EmployAdd from './pages/EmployAdd/EmployAdd';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Homepage />
    }, {
        path : '/employee-add',
        exact : false,
        main : () => <EmployAdd />
    }, {
        path : '/employee-edit/:id/edit',
        exact : false,
        main : ({match}) => <EmployAdd match={match}/>
    }, {
        path : '/employee-list',
        exact : false,
        main : () => <EmployListPage />
    }, {
        path : '/',
        exact : false,
        main : () => <Page404 />
    }
];

export default routes;