import React from "react";
import * as S from "./styled";

const Feed = ({ url, title, content }) => {
  return (
    <S.Feed>
      <S.Wrapper>
        <S.ModalFeed>
          <S.ModalTitle>{title}</S.ModalTitle>
          {content}
          <div>
            <a target="_blank" href={url}>
              {url}
            </a>
          </div>
        </S.ModalFeed>
      </S.Wrapper>
    </S.Feed>
  );
};

export default Feed;
