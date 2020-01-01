import React ,{ Component } from 'react';
import Menu from './components/Menu/Menu';
import EmployList from './components/EmployList/EmployList';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div id="main-wrapper">
                        <header className="topbar">
                            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                                <div className="navbar-header">
                                    <a className="navbar-brand">
                                        <img src="elegant/assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                                        <img src="elegant/assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                                    </a>
                                </div>
                            </nav>
                        </header>
                        <Menu />
                        <div className="page-wrapper">
                            { this.mainContent(routes) }
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
    mainContent = (routes) => {
        var result = "";
        if (routes.length > 0)  {
            result = routes.map((route, index) => {
                return (
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            });
        }
        return <Switch>{ result }</Switch>
    }
}

export default App;
