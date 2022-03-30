import React from "react";
import { Routes, Route } from "react-router-dom";
import FeedArticle from "../FeedArticle";

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
