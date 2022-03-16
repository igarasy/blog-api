import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedArticle from "./Components/FeedArticle";
import Header from "./Components/Header/index";

import GlobalStyle from "./globlalStyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeedArticle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
