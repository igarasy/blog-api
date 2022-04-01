import React from "react";
import useFetch from "../../../Hooks/useFetch";
import Feed from "../../Feed";
import Loading from "../../Loading";
import NavBarCategories from "../../NavBarCategories";
import { API_URL } from "../../../api";
import { useNavigate, useParams } from "react-router-dom";
import getTopHeadline from "../Headlines/hooks/useTopHeadlines";

/*pegaremos o country agora através do useParams, desestruturizando ele  */

const Headlines = () => {
  const { country, category } = useParams();
  const { data, request, loading, error } = useFetch();
  const navigate = useNavigate();
  const { getHeadline } = getTopHeadline();

  const handleCategory = (category) => {
    navigate(`/topheadlines/${country}/${category}`);
    const searchParameters = new URLSearchParams("");
    searchParameters.set("category", category);
    searchParameters.set("country", country);
    request(API_URL + searchParameters.toString());
  };

  React.useEffect(() => {
    function fetchArticles() {
      const searchParameters = new URLSearchParams("");
      searchParameters.set("country", country);
      console.log(getHeadline);
      request(API_URL + searchParameters.toString());
    }
    fetchArticles();
  }, [country, category]);

  if (error) return <div>{error}</div>;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <NavBarCategories handleCategory={handleCategory} />
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

export default Headlines;
