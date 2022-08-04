import "./TickerContainer.css";
const TickerContainer = (props) => {
  return <div className="ticker-container">{props.children}</div>;
};

export default TickerContainer;
