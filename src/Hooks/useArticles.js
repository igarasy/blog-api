import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import { API_URL } from "../api";

const useArticles = () => {
  const { country } = useParams();
  const { data, request } = useFetch();
  const navigate = useNavigate();

  const fetchArticlesCountry = () => {
    const searchParameters = new URLSearchParams("");
    searchParameters.set("country", country);

    request(API_URL + searchParameters.toString());
  };

  const fetchArticlesCategory = (category) => {
    navigate(`/topheadlines/${country}/${category}`);
    const searchParameters = new URLSearchParams("");
    searchParameters.set("category", category);
    searchParameters.set("country", country);
    request(API_URL + searchParameters.toString());
  };

  return { fetchArticlesCountry, data, fetchArticlesCategory };
};
export default useArticles;
