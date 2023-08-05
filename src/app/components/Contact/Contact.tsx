import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <div>
                <h1>Контакты</h1>
            </div>

            <div className="contact-map">
                <div style={{position: "relative", overflow: "hidden"}}>
                    <a
                        href="https://yandex.ru/maps/51/samara/?utm_medium=mapframe&utm_source=maps"
                        style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}
                    >
                        Самара
                    </a>
                    <a
                        href="https://yandex.ru/maps/51/samara/house/luganskaya_ulitsa_5/YUkYdw9hTUIEQFtpfX12cnVrZQ==/?ll=50.184447%2C53.176734&utm_medium=mapframe&utm_source=maps&z=15.07"
                        style={{
                            color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'
                        }}
                    >
                        Луганская улица, 5 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=50.184447%2C53.176734&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzM1ODI0MRKFAdCg0L7RgdGB0LjRjywg0LPQvtGA0L7QtNGB0LrQvtC5INC-0LrRgNGD0LMg0KHQsNC80LDRgNCwLCDQltC10LvQtdC30L3QvtC00L7RgNC-0LbQvdGL0Lkg0YDQsNC50L7QvSwg0JvRg9Cz0LDQvdGB0LrQsNGPINGD0LvQuNGG0LAsIDUiCg3UuUhCFSiyVEI%2C&z=15.07"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{position: "relative"}}>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;