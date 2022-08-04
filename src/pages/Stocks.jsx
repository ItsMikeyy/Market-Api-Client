import { Fragment, useEffect } from "react";
import Header from "../components/Header";
import StockLookup from "../components/StockLookup";

const Stocks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Header />
      <StockLookup />
    </Fragment>
  );
};

export default Stocks;
