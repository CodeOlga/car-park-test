import styled from 'styled-components';
import mainPicture from '../../assets/mainPicture.jpg';

export const HomeWrap = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// justify-content: flex-end;
// align-items: center;
  margin-top: 100px;
  margin-left: 115px;
  // margin: 0 auto;
  color: #ffffff;
  font-family: 'Manrope', sans-serif;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 100px;
  left: 0px;
  height: 100vh;
  width: 100%;
  // background-image: url('https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D');
  background-image: url(${mainPicture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // opacity: 0.8;
  z-index: -1;
`;

export const Title = styled.h1`
  // margin-top: 100px;
  // margin-left: 115px;
  color: #ffffff;
  font-family: 'Manrope', sans-serif;
`;

export const Text = styled.p`
  margin-top: 30px;
  // margin-left: 115px;
  color: #ffffff;
  font-size: 24px;
  font-family: 'Manrope', sans-serif;
  // font-style: italic;
`;

export const Span = styled.span`
  color: #0B44CD;
`;

export const Button = styled.button`
margin-top: 60px;
width: 168px;
height: 44px;
display: inline-flex;
// padding: 12px 50px;
justify-content: center;
align-items: center;
border-radius: 12px;
color: #ffffff;
background: #3470FF;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 20px;
`;