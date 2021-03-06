import React, { Fragment, useContext } from 'react'
// import { fas, fa,id,card,alt } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import{ Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext'
import CardContext from '../../../context/cards/cardContext'

const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);
    const cardContext = useContext(CardContext);

    const { isAuthenticated, logout, user } = authContext;
    const { clearCards } = cardContext;
    const handleLogout = () => {
        logout();
        clearCards();
    }; 
        
    const authLinks = (
        <Fragment>
            <li>Hello { user && user.name }</li>
            <li>
                <a onClick={handleLogout} href="#!">
                    <i classname="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li>
              <Link to="/register">Register</Link>
            </li>
            {"|"}
            <li>
              <Link to="/login">Login</Link>
            </li>
        </Fragment>
    )
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
              {isAuthenticated ? authLinks : guestLinks}        
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}
Navbar.defaultProps = {
     title: 'Card Manager',
     icon: 'fas fa-id-card-alt'
 }

export default Navbar
