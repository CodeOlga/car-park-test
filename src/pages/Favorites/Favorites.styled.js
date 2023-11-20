import styled from 'styled-components';
import noResultsPicture from '../../assets/noResultsFound.png';

export const FavoritesWrap = styled.div`
  margin-top: 100px;
  position: relative;
`;

export const NoResultsImage = styled.img`
  position: absolute;
  top: 100px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-image: url(${noResultsPicture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;