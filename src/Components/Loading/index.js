import React from "react";
import ReactLoading from "react-loading";
import * as S from "./styled";

const Loading = () => (
  <S.Wrapper>
    <ReactLoading type={"spin"} color={"#160d08"} height={100} width={100} />
    <p>Carregando...</p>
  </S.Wrapper>
);

export default Loading;
