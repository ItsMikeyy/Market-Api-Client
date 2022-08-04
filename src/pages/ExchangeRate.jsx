import { Fragment, useEffect } from "react";
import ExchangeLookup from "../components/ExchangeLookup";
import Header from "../components/Header";

const ExchangeRate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Header />
      <ExchangeLookup />
    </Fragment>
  );
};

export default ExchangeRate;
