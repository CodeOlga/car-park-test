import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  margin: 0;
  padding: 0 15px;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);   
  
  @media screen and (min-width: 768px) {
    padding: 0 70px;
  }

  @media screen and (min-width: 1220px) {
    padding: 0 115px;
  }
  `;

export const Logo = styled.h2`
  text-transform: uppercase;
  color: #0B44CD;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1220px) {
    font-size: 26px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  padding: 28px 0;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
    font-size: 24px;
  }

  @media screen and (min-width: 1220px) {
    font-size: 26px;
  }
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
