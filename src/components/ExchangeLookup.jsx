import { Fragment, useState } from "react";
import "./ExchangeLookup.css";

import img from "../IMG/downarrow.svg";
const ExchangeLookup = () => {
  const [formData, setFormData] = useState({ toCurrency: "USD" , fromCurrency: "BTC"});
  const [exchangeData, setExchangeData] = useState({});
  const submitHandler = async (e) => {
    //post to server currency data from formData state 
    e.preventDefault();
    const response = await fetch("https://marketdapiata.herokuapp.com/exchanges", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    //set response to setExchangeData state
    setExchangeData(data);
  };

  const changeHandler = (e) => {
    //Getting and setting values from options 
    const name = e.target.name;
    const value = e.target.value;

    setExchangeData({});
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return (
    <Fragment>
      <div className="exchange-container">
        <h2>Exchange Rate Tool</h2>
        <form className="exchange-form" onSubmit={submitHandler}>
          <select name="toCurrency" onChange={changeHandler}>
            <option value="USD">USD,US dollar</option>
          </select>
          <img className="exchange-img" src={img} />
          <select name="fromCurrency" onChange={changeHandler}>
            <option value="BTC">BTC,Bitcoin</option>
            <option value="ETH">ETH,Ethereum</option>
            <option value="BNB">BNB,Binance-Coin</option>
            <option value="XRP">XRP,Ripple</option>
            <option value="ADA">ADA,Cardano</option>
            <option value="SOL">SOL,Solana</option>
            <option value="DOGE">DOGE,DogeCoin</option>
            <option value="DOT">DOT,Polkadot</option>
            <option value="MATIC">MATIC,Polygon</option>
            <option value="AVAX">AVAX,Avalanche</option>
            <option value="USD">USD,US dollar</option>
            <option value="EUR">EUR,Euro</option>
            <option value="JPY">JPY,Japanese yen</option>
            <option value="GBP">GBP,Pound sterling </option>
            <option value="AUD">AUD,Australian dollar</option>
            <option value="CAD">CAD,Canadian dollar</option>
            <option value="CHF">CHF,Swiss franc</option>
            <option value="CNH">CNH,Chinese renminbi</option>
            <option value="HKD">HKD,Hong Kong dollar</option>
            <option value="NZD">NZD,New Zealand dollar</option>
          </select>
          <p>Alpha Vantage made this feature premium so this no longer works see video for demonstration!</p>
          <button className="submit-button inactive-button" type="button">
            Get Quote
          </button>
        </form>
      </div>
      {/*If exchangeData is not undefined display results*/}
      {Object.keys(exchangeData).length !== 0 && (
        <div className="quote-container">
          <h2>
            1{formData.fromCurrency} = ${exchangeData.symbol}USD
          </h2>
          <p>Last Update: {exchangeData.date} UTC</p>
        </div>
      )}
    </Fragment>
  );
};

export default ExchangeLookup;
