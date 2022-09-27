import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const Navbar = () => {

    const { user } = useContext(UserContext);

    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <span className="nav-link">{user}</span>
            </li>
            <li className="nav-item py-2">
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Config</button>
            </li>
        </ul>
    )
}

export default Navbar;