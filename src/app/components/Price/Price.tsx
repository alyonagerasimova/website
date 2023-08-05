import data from '../../text/text.json';
import './Price.scss';

const Price = () => {

    return (
        <div className='prices'>
            <h1>Услуги и цены</h1>
            <div className='prices__items'>
                {data.prices.service.map((item: string, i: number) => (
                        <div className='item' key={i}>
                            <div className='item__header'>
                                <h2>{item}</h2>
                                <pre>{data.prices.price[i]}</pre>
                            </div>
                            <div className='item__line'/>
                            <div>{data.prices.description[i]}</div>
                        </div>
                    )
                )}
            </div>

        </div>
    );
};

export default Price;