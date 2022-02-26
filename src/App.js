import React, { useEffect, useState } from 'react';
import './scss/styles.scss';
import currencyAPI from './api/axios';
import Currency from './pages/Currency/Currency';
import Setting from './pages/Setting/Setting';
import { Route, Routes } from 'react-router-dom';
import ChooseCurrencyLeft from './pages/ChooseCurrency/ChooseCurrencyLeft/ChooseCurrencyLeft';
import ChooseCurrencyRight from './pages/ChooseCurrency/ChooseCurrencyRight/ChooseCurrencyRight';

function App() {

  const [rates, setRates] = useState([]);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('KGS');
  const [time, setTime] = useState(null);

  useEffect(() => {
    currencyAPI.get('/',{
      params:{
        base_currency:currency1
      }
    })
      .then(resp => {
        setRates(resp.data.data);
        setTime(resp.data.query.timestamp);

        console.log(typeof resp.data.query.base_currency);
      })

  }, [currency1])


  return (
    <div className="app">
      <h1 className="app__header">
        Конвертер валют
      </h1>
      <Routes>
        <Route path='/' element={
          <Currency
            currency1={currency1}
            currency2={currency2}
            setCurrency1={setCurrency1}
            setCurrency2={setCurrency2}
            amount={Object.values(rates)}
          />}
        />
        <Route path='setting' element={<Setting time={time}/>} />
        <Route path='chooseCurrencyLeft' element={
          <ChooseCurrencyLeft
            currencies={Object.keys(rates)}
            setCurrency1={setCurrency1}
          />} />
        <Route path='chooseCurrencyRight' element={
          <ChooseCurrencyRight
            currencies={Object.keys(rates)}
            setCurrency2={setCurrency2}
          />} />

      </Routes>
    </div>
  );
}

export default App;
