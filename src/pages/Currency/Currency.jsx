import React, { useState, useEffect } from 'react'
import { AiOutlineSetting } from "react-icons/ai";
import { FaExchangeAlt } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import { Link } from 'react-router-dom';

function Currency(props) {
    const { currency1, currency2, setCurrency1, setCurrency2, checked, amount } = props;

    // const [show, setShow] = useState(false);
    const [arr, setArr] = useState([1.00, 2.00, 3.00, 4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.00]);

    const currencyChange = () => {
        setCurrency1(currency2);
        setCurrency2(currency1);
    }

    const currentCurrency = amount.find((cur) => (
        cur[0] == currency2
    ))

    const divisionCurrency = () => {
        if (arr[0] <= 1) {
            return 0;
        }
        setArr(arr.map((num) => num / 10));
    }

    const multiplicationCurrency = () => {
        if (arr[0] >= 1000000000) {
            return 0;
        }
        setArr(arr.map((num) => num * 10));
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
                <IoIosArrowBack className="slide left" onClick={divisionCurrency} />
                <div className="currency__amount bg-black">
                    <ul>
                        {
                            arr.map((number, index) => (
                                <li key={index}>
                                    {number <= 10 ? (number).toFixed(2) : number >= 100000 && number < 1000000
                                        ? `${number / 1000}K` : number >= 1000000 && number < 1000000000 ? `${number / 100000}M`
                                            : number >= 1000000000 ? `${number / 100000000}B` : number}

                                    {/* При нажатии в центр на любую конвертацию раскрывать 
                                            этот раздел и показывать десятые части */}
                                    {/* <ul>
                                        {
                                            arr.map((num, ind) => (
                                                <li key={ind}>
                                                    {number < 10 ? `${number}.${number * 10 + ind}` : number >= 10 && number < 100
                                                        ? `${number + (ind + 1)}` : number >= 100 && number < 1000 ? `${number + (10 * (ind + 1))}`
                                                            : number >= 1000 && number < 10000 ? `${number + (100 * (ind + 1))}`
                                                                : number >= 10000 && number < 100000 ? `${number + (1000 * (ind + 1))}`
                                                                    : number >= 100000 && number < 1000000 ? `${(number + (10000 * (ind + 1))) / 1000}K`
                                                                        : number >= 1000000 && number < 10000000 ? `${(number + (100000 * (ind + 1))) / 100000}M`
                                                                            : number >= 10000000 && number < 100000000 ? `${(number + (1000000 * (ind + 1))) / 100000}M`
                                                                                : number >= 100000000 && number < 1000000000 ? `${(number + (10000000 * (ind + 1))) / 100000}M`
                                                                                    : number >= 1000000000 && number < 10000000000 ? `${(number + (100000000 * (ind + 1))) / 100000000}B`
                                                                                        : number >= 10000000000 ? `${(number + (1000000000 * (ind + 1))) / 100000000}B`
                                                                                            : number}
                                                </li>
                                            ))
                                        }
                                    </ul> */}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="currency__amount bg-lightGray">
                    <ul>
                        {
                            currentCurrency && arr.map((number, index) => {
                                const res = (number * currentCurrency[1]);
                                return (
                                    <li key={index}>
                                        {res < 100000 ? `${checked ? Math.round(res) : res.toFixed(2)}`
                                            : res >= 100000 && res <= 1000000 ? `${(res / 1000).toFixed(0)}K`
                                                : res >= 1000000 && res <= 1000000000
                                                    ? `${(res / 100000).toFixed(0)}M`
                                                    : res >= 1000000000 ? `${(res / 100000000).toFixed(0)}B` : res}

                                        {/* При нажатии в центр на любую конвертацию раскрывать 
                                            этот раздел и показывать десятые части */}
                                        {/* <ul>
                                            {
                                                arr.map((num, ind) => (
                                                    <li key={ind}>
                                                        {res < 10 ? `${res}.${res * 10 + ind}` : res >= 10 && res < 100
                                                            ? `${res + (ind + 1)}` : res >= 100 && res < 1000 ? `${res + (10 * (ind + 1))}`
                                                                : res >= 1000 && res < 10000 ? `${res + (100 * (ind + 1))}`
                                                                    : res >= 10000 && res < 100000 ? `${res + (1000 * (ind + 1))}`
                                                                        : res >= 100000 && res < 1000000 ? `${(res + (10000 * (ind + 1))) / 1000}K`
                                                                            : res >= 1000000 && res < 10000000 ? `${(res + (100000 * (ind + 1))) / 100000}M`
                                                                                : res >= 10000000 && res < 100000000 ? `${(res + (1000000 * (ind + 1))) / 100000}M`
                                                                                    : res >= 100000000 && res < 1000000000 ? `${(res + (10000000 * (ind + 1))) / 100000}M`
                                                                                        : res >= 1000000000 && res < 10000000000 ? `${(res + (100000000 * (ind + 1))) / 100000000}B`
                                                                                            : res >= 10000000000 ? `${(res + (1000000000 * (ind + 1))) / 100000000}B`
                                                                                                : res}
                                                    </li>
                                                ))
                                            }
                                        </ul> */}
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>
                <IoIosArrowForward className="slide right" onClick={multiplicationCurrency} />
            </div>
        </div>
    )
}

export default Currency