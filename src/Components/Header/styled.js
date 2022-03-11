import styled from 'styled-components';

export const Header = styled.div`
  background: #c4e2ff;
`;

export const Container = styled.div`
  max-width: 960px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1em;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 2em;
  display: flex;
  color: #333333;
`;

export const Navbar = styled.nav`
  display: flex;
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

export const Li = styled.li`
  text-decoration: none;
  margin: 0 0.7rem;
`;

export const A = styled.a`
  text-decoration: none;
  color: #333333;
`;
