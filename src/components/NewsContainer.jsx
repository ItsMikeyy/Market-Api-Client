import "./NewsContainer.css";
const NewsContainer = (props) => {
  return <div className="news-container">{props.children}</div>;
};

export default NewsContainer;
