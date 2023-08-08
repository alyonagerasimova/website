import React from 'react';
import Close from "../../../assets/Close.svg";
import Hamburger from "../../../assets/fa-bars.svg";
import './Navbar.scss';

interface NavbarProps {
    isOpenMenu: boolean,
    handleMenuClick: () => void,
    handleClickItem: () => void
}

const Navbar = (props: NavbarProps) => {
    const {isOpenMenu, handleMenuClick, handleClickItem} = props;

    return (
        <nav className="topnav">
            <div className={isOpenMenu ? 'navbar active' : 'navbar'}>
                <div className="navbar__links">
                    <a href="#section-1" onClick={handleClickItem}>Обо мне</a>
                    <a href="#section-2" onClick={handleClickItem}>Услуги и цены</a>
                    <a href="#section-3" onClick={handleClickItem}>Контакты</a>
                </div>
            </div>
            <div className="topnav__contact">
                <div>+1 123 456 78 90</div>
                <div>Воронежская, 33</div>
            </div>
            <div className="topnav__mobile" onClick={handleMenuClick}>
                <i>
                    {isOpenMenu ? <Close/> : <Hamburger/>}
                </i>
            </div>
        </nav>
    );
};

export default Navbar;