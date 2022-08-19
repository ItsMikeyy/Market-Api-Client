import { Fragment, useRef, useState } from "react";
import "./StockLookup.css";
const StockLookup = () => {
  const tickerRef = useRef();
  const [ticker, setTicker] = useState({});
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    //Send stock ticker to server 
    e.preventDefault();
    const response = await fetch("http://localhost:5000/stocks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ticker: tickerRef.current.value,
      }),
    });
    //Error checking response
    if (!response.ok) {
      setError("Please enter a valid symbol");
    } else {
      const data = await response.json();
      setTicker(data);
      setError("");
    }
  };
  return (
    <Fragment>
      <div className="stock-container">
        <h2>Stock Lookup</h2>
        <p>Enter ticker to get quote</p>
        <form className="stock-form" onSubmit={submitHandler}>
          <input ref={tickerRef} placeholder="ticker" name="ticker" />
          <button className="submit-button" type="submit">
            Get Quote
          </button>
        </form>
        {error && <h4 className="error">{error}</h4>}
      </div>
      {/*Check to make sure we have data and not an error*/}
      {Object.keys(ticker).length > 1 && !error && (
        <div className="quote-container">
          <h2>{ticker.symbol}</h2>
          <h4>Price: ${ticker.price}</h4>
          <p>
            Change:{" "}
            <span
              className={
                ticker.change.charAt(0) !== "-" ? "increase" : "decrease"
              }
            >
              {ticker.change}
            </span>
          </p>
          <p>Last updated: {ticker.date}</p>
        </div>
      )}
    </Fragment>
  );
};

export default StockLookup;
