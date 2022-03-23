import React from "react";
import useFetch from "../../Hooks/useFetch";
import Feed from "../Feed/index";
import { Img } from "../Feed/styled";
import Header from "../Header/index";
import Loading from "../Loading/index";
import Pagination from "../../Helpers/Pagination";

const FeedArticle = ({ url }) => {
  const { data, request, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchArticles() {
      await request(url);
    }
    fetchArticles();
  }, [url]);

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
            />
          ))}
        </div>
      </>
    );
  else return null;
};

export default FeedArticle;
