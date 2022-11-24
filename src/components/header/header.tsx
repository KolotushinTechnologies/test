// Import Engine Modules
import React from 'react';
import { Link } from "react-router-dom";

// Import Components
import Button from "../button/button";
import Input from "../input/input";

// Import Data
import { headerLinks } from "../../data/links";

// Import Statics
import headerLogoM from "../../assets/logos/header_logo_m.png";
import avatar from "../../assets/images/avatar.png";

// Import Styles(*optional)

const Header = () => {
  return (
    <header className="header">
        <div className="header__wrapper">
            <div className="header__first-section">
                <div className="header__logo">
                    <img className="header__logo-image" src={headerLogoM} alt="logo" />
                </div>

                <div className="header__logo-description">
                    <p className="">
                        Together we are worth. <Link className="link__btn" to="/more">More.</Link>
                    </p>
                </div>
            </div>
            <div className="header__second-section">
                <Input placeholder="Search" />
                <div className="header__profile">
                    <img className="header__profile-image" src={avatar} alt="avatar" />
                </div>
            </div>
        </div>
    </header>
  )
};

export default Header;