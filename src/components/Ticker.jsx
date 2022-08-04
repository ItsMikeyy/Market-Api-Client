import { useState, useEffect } from "react";

const Ticker = (props) => {
  const [ticker, setTicker] = useState({});
  useEffect(() => {
    const getTicker = async () => {
      const tickerResponse = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${props.symbol}&apikey=2VS5DIQHJL41W9GB`
      );
      const tickerData = await tickerResponse.json();
      const tickerPrice = tickerData["Global Quote"]["05. price"];
      const tickerDate = tickerData["Global Quote"]["07. latest trading day"];

      const companyResponse = await fetch(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${props.symbol}&apikey=2VS5DIQHJL41W9GB`
      );
      const companyData = await companyResponse.json();
      const companyName = companyData["Name"];

      setTicker({ price: tickerPrice, date: tickerDate, company: companyName });
    };
    getTicker();
  }, []);

  return (
    <div className="ticker">
      <h3>{ticker.company}</h3>
      <h5>Close: ${ticker.price}</h5>
      <p>Last updated - {ticker.date}</p>
    </div>
  );
};

export default Ticker;
