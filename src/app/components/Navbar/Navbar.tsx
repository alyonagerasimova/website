import React from 'react';
import Close from "../../../assets/Close.svg";
import Hamburger from "../../../assets/fa-bars.svg";
import './Navbar.scss';

interface NavbarProps {
    isOpenMenu: boolean,
    handleMenuClick: () => void,
}

const Navbar = (props: NavbarProps) => {
    const {isOpenMenu, handleMenuClick} = props;
    const handleClickItem = (item: HTMLElement) => {
        // item.classList.add('active');
        console.log(this)
    }

    return (
        <div>
            <nav className="topnav">
                <div className={isOpenMenu ? 'navbar active' : 'navbar'}>
                    <div className="navbar__links">
                        <a href="#section-1">Обо мне</a>
                        <a href="#section-2">Услуги и цены</a>
                        <a href="#section-3">Контакты</a>
                    </div>
                    <div className="navbar__info">
                        <div>+1 123 456 78 90</div>
                        <div>Воронежская, 33</div>
                    </div>
                </div>
                <div className="mobile" onClick={handleMenuClick}>
                    <i>
                        {isOpenMenu ? <Close/> : <Hamburger/>}
                    </i>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;