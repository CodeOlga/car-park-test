import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.50);
  backdrop-filter: blur(2px);
`;

export const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 14px;
  background-color: #ffffff;
  padding: 40px;
  width: 541px;
  max-height: 752px;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 999; 
  cursor: pointer;
`;

export const Image = styled.img`
  height: 248px;
  border-radius: 14px;
`;

export const InfoWrap = styled.div`
  margin-top: 14px;
  margin-bottom: 24px;
`;

export const TitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 8px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #121417;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const InfoLine = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const InfoItem = styled.li`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const Description = styled.p`
  line-height: 1.43;
  margin-top: 14px;
  width: 461px;
`;

export const InfoTitle = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const ConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
  letter-spacing: -0.24px;
  width: 461px;
`;

export const ConditionItem = styled.li`
  border-radius: 35px;
  color: #363535;
  background-color: #f9f9f9;
  padding: 7px 14px;
`;

export const SpanCondition = styled.span`
  color: #3470ff;
  font-weight: 600;
`;

export const Button = styled.a`
  width: 168px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background-color: #3470ff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;