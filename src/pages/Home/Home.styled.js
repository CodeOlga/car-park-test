import styled from 'styled-components';
import mainPicture from '../../assets/mainPicture.jpg';

export const HomeWrap = styled.div`
  margin-top: 80px;
  margin-left: 60px;

  @media screen and (min-width: 880px) {
    margin-top: 100px;
    margin-left: 115px;
  }
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
  color: var(--white-cl);
  
  @media screen and (max-width: 480px) {
    width: 240px;
  }
`;

export const Text = styled.p`
  margin-top: 30px;
  color: var(--white-cl);
  font-size: 24px;
`;

export const Span = styled.span`
  color: var(--pressed-state-bg-cl);
`;

export const Button = styled.button`
  margin-top: 60px;
  width: 168px;
  height: 44px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: var(--white-cl);
  background-color: var(--normal-state-bg-cl);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  transition: background-color 0.3s ease;

  &:hover,
  &:active {
    background-color: var(--pressed-state-bg-cl);
  }
`;