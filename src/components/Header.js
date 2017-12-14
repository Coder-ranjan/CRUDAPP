import React, {Component} from 'react';
import { Link } from 'react-router';

class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">React CRUD App</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><Link className="btn btn-primary" to='/'>Home</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;