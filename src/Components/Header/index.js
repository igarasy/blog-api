import React from "react";
import * as S from "./styled";

const Header = () => {
  return (
    <>
      <S.Header>
        <S.Container>
          <S.Logo>API Blog</S.Logo>
          <S.Navbar>
            <S.Ul>
              <S.Li>
                <S.StyledLink to="/topheadlines/br">
                  Top Headlines BR
                </S.StyledLink>
              </S.Li>
              <S.Li>
                <S.StyledLink to="/topheadlines/usa">
                  Top Headlines USA
                </S.StyledLink>
              </S.Li>
              <S.Li>
                <S.StyledLink to="/topheadlines/ca">
                  Top Headlines Canada
                </S.StyledLink>
              </S.Li>
            </S.Ul>
          </S.Navbar>
        </S.Container>
      </S.Header>
    </>
  );
};

export default Header;
