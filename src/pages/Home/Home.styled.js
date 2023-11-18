import styled from 'styled-components';
import mainPicture from '../../assets/mainPicture.jpg';

export const HomeWrap = styled.div`
  margin-top: 100px;
  margin-left: 115px;
  color: #ffffff;
  font-family: 'Manrope', sans-serif;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 100px;
  left: 0px;
  height: 100vh;
  width: 100%;
  background-image: url(${mainPicture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-family: 'Manrope', sans-serif;
`;

export const Text = styled.p`
  margin-top: 30px;
  color: #ffffff;
  font-size: 24px;
  font-family: 'Manrope', sans-serif;
`;

export const Span = styled.span`
  color: #0B44CD;
`;

export const Button = styled.button`
  margin-top: 60px;
  width: 168px;
  height: 44px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: #ffffff;
  background-color: #3470FF;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  transition: background-color 0.3s ease;

  &:hover,
  &:active {
    background-color: #0B44CD;
  }
`;