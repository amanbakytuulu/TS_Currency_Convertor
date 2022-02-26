import React from 'react'
import { AiOutlineSetting } from "react-icons/ai";
import { FaExchangeAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Currency(props) {
    const { currency1, currency2, setCurrency1, setCurrency2, amount } = props;

    const currencyChange = () => {
        setCurrency1(currency2);
        setCurrency2(currency1);
    }

    return (
        <div className="currency">
            <div className="currency__top">
                <div className="currency__code bg-dark">
                    <Link to='setting'><AiOutlineSetting className="currency__setting" /></Link>
                    <Link to='chooseCurrencyLeft'><h2>{currency1}</h2></Link>
                </div>
                <div className="currency__code bg-gray">
                    <Link to='chooseCurrencyRight'><h2>{currency2}</h2></Link>
                    <FaExchangeAlt className="currency__setting" onClick={currencyChange} />
                </div>
            </div>
            <div className="currency__middle">
                <div className="currency__amount bg-black">
                    <p>84.80</p>
                    <p>169.80</p>
                    <p>254.39</p>
                    <p>339.18</p>
                    <p>443.20</p>
                    <p>84.80</p>
                    <p>169.80</p>
                    <p>254.39</p>
                    <p>339.18</p>
                    <p>443.20</p>
                </div>
                <div className="currency__amount bg-lightGray">

                    {
                        amount &&
                        amount.map((currency, index) => (
                            <p key={index}>{currency.toFixed(2)}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Currency