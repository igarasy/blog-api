import React from "react";
import * as S from "./styled";

const Feed = ({ url, title, content, urlToImage }) => {
  return (
    <S.Feed>
      <S.Wrapper>
        <S.ModalFeed>
          <S.ModalTitle>{title}</S.ModalTitle>
          {content}
          <div>
            <a href={url}>{url}</a>
          </div>
        </S.ModalFeed>
      </S.Wrapper>
    </S.Feed>
  );
};

export default Feed;
