import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate();
    const handleLogout = () =>{

        navigate('/login', {
            replace: true
        });
    };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link 
            className="navbar-brand ms-4" 
            to="/"
        >
            Hacker News
        </Link>
        <div className="navbar-collapse container-sm ">
            <div className="navbar-nav ">
                <NavLink 
                    className={ ({isActive}) => 'nav-item nav-link  ' + (isActive ? 'active' : '' ) }
                    to="/topstories"
                >
                    Top Stories
                </NavLink>

                <NavLink 
                    className={ ({isActive}) => 'nav-item nav-link disabled' + (isActive ? 'active' : '' ) }
                    to="/newstories"
                >
                    New Stories
                </NavLink>
                <NavLink 
                    className={ ({isActive}) => 'nav-item nav-link disabled' + (isActive ? 'active' : '' ) }
                    to="/beststories"
                >
                    Best Stories
                </NavLink>
            </div>

            <ul className="navbar-nav ml-auto">
                <span className="nav-item nav-link text-info">
                    Placeholder user name
                </span>
                <button 
                    className="nav-item nav-link btn disabled" 
                    onClick={ handleLogout }
                >
                    Logout
                </button>
            </ul>

        </div>

    </nav>
  )
}

