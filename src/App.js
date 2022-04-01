import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headlines from "./Components/Pages/Headlines/index";

import Header from "./Components/Header";

import GlobalStyle from "./globlalStyles";
import FeedArticle from "./Components/FeedArticle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/topheadlines/:country" element={<FeedArticle />} />
          <Route
            path="/topheadlines/:country/:category"
            element={<FeedArticle />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
