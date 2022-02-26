import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import { SiOpenaccess } from 'react-icons/si';

function ChooseCurrencyRight(props) {

    const { currencies,setCurrency2 } = props;

    let navigate = useNavigate();


    const [value, setValue] = useState('');
    const [filtered, setFilter] = useState([]);

    useEffect(() => {
        setFilter(currencies.filter((e) => (
            e.toLowerCase().indexOf(value.toLowerCase().trim()) > -1))
        )

    }, [value, currencies])

    function onChangeCurrency(currency) {
        setCurrency2(currency);
        navigate('/');
    }

    return (
        <div className="chooseCurrencyRight">
            <div className="chooseCurrencyRight__header">
                <div className="chooseCurrencyRight__currency">JPY<BsArrowRightShort />?</div>
                <div className="chooseCurrencyRight__input">
                    <AiOutlineSearch className="chooseCurrencyRight__icon left" />
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    <MdCancel className={`chooseCurrencyRight__icon right ${value ? 'show' : ''}`} onClick={() => setValue('')} />
                    <Link to='/'>Cancel</Link>
                </div>
            </div>
            <div className="chooseCurrencyRight__middle">
                {filtered.sort().map((currency, index) => {
                    return <h2 key={index} onClick={()=>onChangeCurrency(currency)}>{currency} <SiOpenaccess style={{ color: '#f0f5f8' }} /> </h2>
                })}
            </div>
        </div>
    )
}

export default ChooseCurrencyRight