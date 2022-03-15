import React from "react";
import FeedArticle from "./Components/FeedArticle";
import Header from "./Components/Header/index";

import GlobalStyle from "./globlalStyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <FeedArticle />
    </div>
  );
}

export default App;
