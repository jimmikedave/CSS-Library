import React from 'react';

const SideNavigation = () => {
    return (
        <div className="side-nav">
            <ul className="navigation">
                <li className="navigation__item">
                    <a href="#" className="navigation__link">
                        <span>Home</span>
                    </a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link">
                        <span>Flex Direction</span>
                    </a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link">
                        <span>Modern Landing</span>
                    </a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link">
                        <span>Hover</span>
                    </a>
                </li>
            </ul>
            <div className="legal">
                &copy; 2021 by Jim David
            </div>
        </div>
    )
}

export default SideNavigation;