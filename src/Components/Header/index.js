import React from "react";
import * as S from "./styled";

const Header = () => {
  return (
    /*criar uma função que vai fazer o push do contry na url */
    /*Eu importaria o useParams para, desestruturamos o country do useparams   */
    /*cria uma pagina que terá apenas o feedarticles  */
    /* aqui o link vai setar o country para br us ou ca  */

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
                <S.StyledLink to="/topheadlines/us">
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
