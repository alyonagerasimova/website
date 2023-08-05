import './About.scss';
import data from "../../text/text.json";
import Square from "../../../assets/square.svg";

const About = () => {
    return (
        <div className='about'>
            <h1>Обо мне</h1>
            <div className='about__items'>
                {
                    data.about.header.map((item: string, i: number) => (
                        <div className='about__item' key={i}>
                            <div className='about__item__icon'>
                                <Square />
                                {/*<img src={data.about.icons[i]}/>*/}
                            </div>

                            <div>
                                <h2>{item}</h2>
                                <ul>
                                    {data.about.items[i].map((it, index) => (
                                            <li key={index}>
                                                {it}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                        </div>
                    ))}
            </div>
        </div>
    );
};

export default About;