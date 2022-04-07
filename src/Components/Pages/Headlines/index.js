import React from "react";
import useFetch from "../../../Hooks/useFetch";
import Feed from "../../Feed";
import Loading from "../../Loading";
import NavBarCategories from "../../NavBarCategories";
import { useParams } from "react-router-dom";
import useArticles from "../../../Hooks/useArticles";

const Headlines = () => {
  const { country } = useParams();
  const { loading, error } = useFetch();
  const { fetchArticlesCountry, data, fetchArticlesCategory } = useArticles();

  const handleCategory = (category) => {
    fetchArticlesCategory(category);
  };

  React.useEffect(() => {
    fetchArticlesCountry(country);
  }, [country]);

  if (error) return <div>{error}</div>;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <NavBarCategories handleCategory={handleCategory} />
        <div>
          {data.articles.map((article) => (
            <Feed
              key={article.id}
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
