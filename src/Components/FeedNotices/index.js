import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import FeedArticle from "../FeedArticle";
import {
  HEADLINES_CA,
  HEADLINES_USA,
  HEADLINES_BR,
  SPORTS_CA,
  SPORTS_USA,
  SPORTS_BR,
} from "../../api";

const FeedNotices = () => {
  return (
    <section>
      <Routes>
        <Route path="br" element={<FeedArticle country={"br"} />} />
        <Route path="usa" element={<FeedArticle country={"us"} />} />
        <Route path="ca" element={<FeedArticle country={"ca"} />} />
      </Routes>
    </section>
  );
};

export default FeedNotices;
