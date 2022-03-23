import styled from "styled-components";

export const Feed = styled.section`
  max-width: 960px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  height: 100%;
  margin-top: 100px;
`;

export const Wrapper = styled.div`
  margin-top: 200px;
  max-width: 760px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  border: solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  flex-wrap: nowrap;
`;

export const ModalTitle = styled.h1`
  margin-bottom: 1em;
`;

export const ModalFeed = styled.div`
  max-width: 960px;
  display: inline-block;
  align-self: flex-end;
  padding: 0;
  line-height: 1.6em;
  flex-wrap: nowrap;
  flex: 1;
  margin-bottom: 1em;
`;

export const Img = styled.img`
  width: 300px;
  height: auto;
  max-width: 100%;
`;
