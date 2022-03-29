import React from "react";
import * as S from "./styled";

const NavBarCategories = ({ fetchArticlesCategories }) => {
  return (
    <S.Navbar>
      <S.Ul>
        <S.Li>
          <S.Button onClick={() => fetchArticlesCategories("sports")}>
            Sports
          </S.Button>
        </S.Li>
        <S.Li>
          <S.Button onClick={() => fetchArticlesCategories("business")}>
            Business
          </S.Button>
        </S.Li>
        <S.Li>
          <S.Button onClick={() => fetchArticlesCategories("health")}>
            Health
          </S.Button>
        </S.Li>
        <S.Li>
          <S.Button onClick={() => fetchArticlesCategories("technology")}>
            Technology
          </S.Button>
        </S.Li>
      </S.Ul>
    </S.Navbar>
  );
};

export default NavBarCategories;
