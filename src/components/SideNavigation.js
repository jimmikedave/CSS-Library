import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavigation = () => {
    return (
        <div className="side-nav">
            <ul className="navigation">
                <li className="navigation__item">
                    <NavLink 
                        className="navigation__link"
                        to="/home"
                    >
                        <span>Home</span>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink 
                        className="navigation__link"
                        to="/flexbox"
                    >
                        <span>Flex Direction</span>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink 
                        className="navigation__link"
                        to="/modern-landing"
                    >
                        <span>Modern Landing</span>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink 
                        className="navigation__link"
                        to="/hover"
                    >
                        <span>Hover</span>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink 
                        className="navigation__link"
                        to="/whiteboard-prep"
                    >
                        <span>Whiteboard Prep</span>
                    </NavLink>
                </li>
            </ul>
            <div className="legal">
                &copy; 2021 by Jim David
            </div>
        </div>
    )
}

export default SideNavigation;