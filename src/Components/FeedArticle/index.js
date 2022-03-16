import React from "react";
import useFetch from "../../Hooks/useFetch";
import Feed from "../Feed/index";
import { Img } from "../Feed/styled";
import Header from "../Header/index";
import { Loading } from "../Loading/styled";

const FeedArticle = ({ url }) => {
  const { data, request, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchArticles() {
      await request(
        " https://newsapi.org/v2/top-headlines?country=br&apiKey=65e8c47ca24644858db20a589d7d42bb"
      );
    }
    fetchArticles();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <Header />
        <div>
          {data.articles.map((article) => (
            <Feed
              key={article.description}
              title={article.title}
              content={article.content}
              url={article.url}
              img={article.urlToImage}
            >
              {console.log(article.urlToImage)}
            </Feed>
          ))}
        </div>
      </>
    );
  else return null;
};

export default FeedArticle;
