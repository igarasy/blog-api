import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Feed from "../Feed/index";
import Header from "../Header/index";
import Loading from "../Loading/index";
import * as S from "./styled";
import NavBarCategories from "../NavBarCategories";
import { API_URL } from "../../api";

const FeedArticle = ({ country }) => {
  const { data, request, loading, error } = useFetch();

  function fetchArticlesCategories(category) {
    const searchParameters = new URLSearchParams("");
    searchParameters.set("category", category);
    searchParameters.set("country", country);
    request(API_URL + searchParameters.toString());
  }

  React.useEffect(() => {
    function fetchArticles() {
      const searchParameters = new URLSearchParams("");

      searchParameters.set("country", country);
      console.log(searchParameters.toString());
      request(API_URL + searchParameters.toString());
    }
    fetchArticles();
    console.log(data);
  }, [country]);

  if (error) return <div>{error}</div>;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <Header />
        <NavBarCategories fetchArticlesCategories={fetchArticlesCategories} />
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
