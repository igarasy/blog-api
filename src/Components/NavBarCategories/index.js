import React from "react";
import * as S from "./styled";

const NavBarCategories = ({ handleCategory }) => {
  return (
    <S.Navbar>
      <S.Ul>
        <S.Li>
          <S.Button onClick={() => handleCategory("sports")}>Sports</S.Button>
        </S.Li>
        <S.Li>
          <S.Button onClick={() => handleCategory("business")}>
            Business
          </S.Button>
        </S.Li>
        <S.Li>
          <S.Button onClick={() => handleCategory("health")}>Health</S.Button>
        </S.Li>
        <S.Li>
          <S.Button onClick={() => handleCategory("technology")}>
            Technology
          </S.Button>
        </S.Li>
      </S.Ul>
    </S.Navbar>
  );
};

export default NavBarCategories;
