import styled from 'styled-components';
import noResultsPicture from '../../assets/noResultsFound1.png';

export const FavoritesWrap = styled.div`
  position: relative;
`;

export const NoResultsImage = styled.img`
  position: absolute;
  top: 260px;
  left: 0px;
  width: 100%;
  height: 100vh;

  background-image: url(${noResultsPicture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;

  @media screen and (min-width: 880px) {
    top: 100px;
  }
`;