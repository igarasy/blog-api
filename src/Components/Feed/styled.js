import styled from 'styled-components';

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
  width: 430px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: auto 0;
  border: solid black;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const ModalTitle = styled.h1`
  margin-bottom: 4em;
`;

export const ModalFeed = styled.div`
  max-width: 960px;
  display: inline-block;
  align-self: flex-end;
  padding: 0;
  line-height: 1.6em;
  flex-wrap: wrap;
`;
