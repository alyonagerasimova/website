import './Layout.scss';
import React, {useCallback, useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import {DynamicBlock} from "../../App";
import Header from "../Header/Header";

export const Layout = () => {

    const rootElement = document.documentElement;
    const sections = document.querySelectorAll('section'),
        nav = document.querySelector('nav'),
        scrollToTopBtn = document.querySelector(".scrollToTopBtn");
    const [scroll, setScroll] = useState(0);
    const onScroll = useCallback(() => setScroll(Math.round(window.scrollY)), []);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleMenuClick = () => {
        setIsOpenMenu(prev => !prev);
    }

    const checkVisible = () => {
        let cur_pos = scroll;
        sections.forEach((section) => {
            let top = section.offsetTop - nav.offsetHeight - 200 - 60,
                bottom = top + section.offsetHeight;
            let el = nav.querySelector('a[href="#' + section.getAttribute('id') + '"]')
            if (cur_pos >= top && cur_pos <= bottom) {
                section.classList.add('active');
                el?.classList?.add('active');
            } else {
                section.classList?.remove('active');
                el?.classList?.remove('active');
            }
        })
    }

    const scrollToTop = () => {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    const handleScroll = () => {

        document.querySelectorAll(`nav ${isOpenMenu ? '.navbar.active' : '.navbar'}__links a`)
            .forEach(el => el.classList.remove('active'))

        checkVisible();
        let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if (rootElement.scrollTop / scrollTotal > 0.8) {
            scrollToTopBtn?.classList?.add("showBtn");
        } else {
            scrollToTopBtn?.classList?.remove("showBtn");
        }
    }

    useEffect(() => {
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <div className='layout'>
            <Navbar isOpenMenu={isOpenMenu} handleMenuClick={handleMenuClick}/>
            <Header/>
            <section id="section-1">Обо мне</section>
            <section id="section-2">Услуги и цены</section>
            <section id="section-3">Контакты</section>
            <section>Секция без пункта меню</section>
            <DynamicBlock/>
            <button className="scrollToTopBtn" onClick={scrollToTop}>☝️</button>
            <footer>Footer</footer>
            {/*<div className="scroll">{scroll}</div>*/}
        </div>
    );
};