import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  margin: 0;
  padding: 0 115px;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Logo = styled.h2`
  text-transform: uppercase;
  color: #0B44CD;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 40px;
  padding: 28px;
  font-size: 26px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #121417;
  text-decoration: none;
  transition: transform 0.3s ease;

  &.active {
    color: #0B44CD;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
