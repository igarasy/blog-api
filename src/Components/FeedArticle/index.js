import React from "react";
import useFetch from "../../Hooks/useFetch";
import Feed from "../Feed/index";

const FeedArticle = () => {
  const { data, request, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchArticles() {
      await request(
        "https://newsapi.org/v2/everything?q=Apple&from=2022-03-11&sortBy=popularity&apiKey=65e8c47ca24644858db20a589d7d42bb"
      );
    }
    fetchArticles();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>Carregando....</div>;
  if (data)
    return (
      <div>
        {data.articles.map((article) => (
          <Feed
            key={article.description}
            title={article.title}
            content={article.content}
            url={article.url}
          ></Feed>
        ))}
      </div>
    );
  else return null;
};

export default FeedArticle;
