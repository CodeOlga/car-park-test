import styled from 'styled-components';

export const CardWrap = styled.div`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  font-family: Manrope; 
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 274px; 
  height: 274px;
`;

export const Image = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  padding: 0;
  border: none;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  background: none;
  cursor: pointer;
`;

export const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; 
  margin-top: 14px;
  margin-bottom: 4px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 14px;
  color: #121417;
`;

export const Span = styled.span`
  color:  #3470FF;
`;

export const SvgSpan = styled.span`
  display: inline-block;
  width: 0px;
  height: 16px;
  stroke-width: 1px;
  stroke: rgba(18, 20, 23, 0.10);
  margin: 0 6px;
`;

export const SecondLine = styled.div`
  display: flex;
  text-align: left;
  color: rgba(18, 20, 23, 0.50);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 4px; 
`;

export const ThirdLine = styled.div`
  display: flex;
  text-align: left;
  color: rgba(18, 20, 23, 0.50);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 28px; 
`;

export const List = styled.div`
  width: 274px;
`;

export const Item = styled.p`
  display: flex;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Button = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470FF;
  color:  #FFF;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-top: auto; 
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #0B44CD;
  }
`;

