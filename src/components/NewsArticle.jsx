import "./NewsArticle.css";
const NewsArticle = (props) => {
  return (
    <a href={props.articleLnk} target="_blank">
      <div className="news-article">
        <img className="news-img" src={props.src} alt={props.title} />
        <div className="article-text">
          <h1 className="article-title">{props.title}</h1>
          <p className="article-summary">{props.summary}</p>
        </div>
      </div>
    </a>
  );
};

export default NewsArticle;
