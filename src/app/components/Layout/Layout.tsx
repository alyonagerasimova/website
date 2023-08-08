import './Layout.scss';
import React, {useCallback, useEffect, useState} from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Price from "../Price/Price";
import Contact from "../Contact/Contact";
import Review from "../Review/Review";
import Navbar from "../Navbar/Navbar";
import Arrow from "../../../assets/Стрелка.svg";

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
    const handleClickItem = () => {
        setIsOpenMenu(false);
    }

    const checkVisible = () => {
        let cur_pos = scroll;
        if(cur_pos > 80){
            nav?.classList?.add("after_scroll");
        }else {
            nav?.classList?.remove("after_scroll");
        }
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
        document.querySelectorAll(
            `nav ${isOpenMenu ? '.navbar.active' : '.navbar'}__links a`
        ).forEach(el => el.classList.remove('active'));
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
            <Navbar isOpenMenu={isOpenMenu} handleMenuClick={handleMenuClick} handleClickItem={handleClickItem}/>
            <Header/>
            <section id="section-1">
                <About/>
            </section>
            <section id="section-2">
                <Price/>
            </section>
            <section>
                <Review/>
            </section>
            <section id="section-3">
                <Contact/>
            </section>
            <Arrow className="scrollToTopBtn" onClick={scrollToTop}/>
            <footer>Created by alyonagerasimova</footer>
            {/*<div className="scroll">{scroll}</div>*/}
        </div>
    );
};