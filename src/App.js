import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedArticle from "./Components/FeedArticle";

import GlobalStyle from "./globlalStyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FeedArticle url="https://newsapi.org/v2/top-headlines?country=br&apiKey=65e8c47ca24644858db20a589d7d42bb" />
            }
          />
          <Route
            path="/topheadlinesusa"
            element={
              <FeedArticle url="https://newsapi.org/v2/top-headlines?country=us&apiKey=65e8c47ca24644858db20a589d7d42bb" />
            }
          />
          <Route
            path="/topheadlinescanada"
            element={
              <FeedArticle url="https://newsapi.org/v2/top-headlines?country=ca&apiKey=65e8c47ca24644858db20a589d7d42bb" />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
