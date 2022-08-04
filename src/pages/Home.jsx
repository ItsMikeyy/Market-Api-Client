import { Fragment, useState, useEffect } from "react";
import Header from "../components/Header";
import NewsContainer from "../components/NewsContainer";
import NewsArticle from "../components/NewsArticle";
import "./Home.css";

const Home = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const date = new Date().toISOString();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getNews = async () => {
      const response = await fetch("http://localhost:5000/news");
      const data = await response.json();
      const filteredList = data.feed.filter((article) => {
        return article.banner_image !== "";
      });
      setNewsArticles(filteredList.slice(0, 10));
    };
    getNews();
  }, []);

  return (
    <Fragment>
      <Header />
      <h1 className="heading">Market Summary for: {date.slice(0, 10)}</h1>
      <NewsContainer>
        {newsArticles &&
          newsArticles.map((article, index) => {
            return (
              <NewsArticle
                key={index}
                title={article.title}
                src={article.banner_image}
                summary={article.summary}
                articleLnk={article.url}
              />
            );
          })}
      </NewsContainer>
    </Fragment>
  );
};

export default Home;
