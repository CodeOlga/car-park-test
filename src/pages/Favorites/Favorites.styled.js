import styled from 'styled-components';
import noResultsPicture from '../../assets/noResultsFound.png';

export const FavoritesWrap = styled.div`
  margin-top: 100px;
  margin-left: 115px;
`;

export const NoResultsImage = styled.img`
  position: absolute;
  top: 100px;
  left: 0px;
  height: 100vh;
  width: 100%;
  background-image: url(${noResultsPicture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;