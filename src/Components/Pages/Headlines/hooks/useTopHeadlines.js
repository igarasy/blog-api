import React from "react";
import useFetch from "../../../../Hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../../../api";

const useTopHeadlines = () => {
  const { request, loading, error } = useFetch();
  const { country, category } = useParams();
  const navigate = useNavigate();

  return { getTopHeadline };
};

export default useTopHeadlines;
