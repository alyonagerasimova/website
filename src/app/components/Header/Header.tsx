import React from 'react';
import './Header.scss';
import Image from '../../../assets/img.png';

const Header = () => {
    return (
            <header className='header'>
                <img src={Image} alt=''/>
                <div className='content'>
                    <div className='content__text'>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, earum.</h1>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam cumque cupiditate
                            delectus
                            eius enim et ex, explicabo minima modi nihil odit officia possimus provident quas reiciendis
                            sapiente
                            similique.
                        </div>
                    </div>

                    <div className='content__btn'>
                        <button>Записаться</button>
                    </div>

                </div>

            </header>
    );
};

export default Header;