import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedArticle from "./Components/FeedArticle";
import { HEADLINES_BR, HEADLINES_USA, HEADLINES_CA, SPORTS_CA } from "./api";
import FeedNotices from "./Components/FeedNotices";
import Header from "./Components/Header";

import GlobalStyle from "./globlalStyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/topheadlines/*" element={<FeedNotices />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
