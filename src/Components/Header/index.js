import React from 'react';
import { Link } from 'react-router-dom';
import Feed from '../Feed';
import * as S from './styled';

const Header = () => {
  return (
    <>
      <S.Header>
        <S.Container>
          <S.Logo>API Blog</S.Logo>
          <S.Navbar>
            <S.Ul>
              <S.Li>
                <S.A href="#">Top Headlines</S.A>
              </S.Li>
            </S.Ul>
          </S.Navbar>
        </S.Container>
      </S.Header>
      <Feed />
    </>
  );
};

export default Header;
