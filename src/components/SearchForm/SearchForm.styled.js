import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 18px;
  margin-top: 65px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #8A8A89;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 8px; 
`;

export const CustomInputLeft = styled.input`
  width: 140px;
  font-size: 18px;
  border-radius: 14px 0px 0px 14px;
  border: 1px solid transparent;
  border-right: 1px solid rgba(138, 138, 137, 0.20);
  padding: 13px 0 13px 18px;
  background-color: #F7F7FB;
  line-height: 20px; 
  color: #121417;
  font-family: 'Manrope';
  font-weight: 500;
  margin-left: 0px;

    &::placeholder {
      opacity: 1;
    }

    &:hover {
      border-color: #CCCCCC;
  }

    &:focus {
      border-color: #3470FF;
      outline: none;
    }
`;

export const CustomInputRight = styled.input`
  width: 140px;
  padding: 13px 0 13px 18px;
  font-size: 18px;
  border-radius: 0px 14px 14px 0px;
  border: 1px solid transparent;
  background-color: #F7F7FB;
  color: #121417;
  font-weight: 500;
  margin-right: 0px;
  line-height: 20px; 

    &::placeholder {
      opacity: 1;
    }

    &:hover {
      border-color: #CCCCCC;
    }

    &:focus {
      border-color: #3470FF;
      outline: none;
  }
`;

export const StyledButton = styled.button`
color: #FFF;
font-size: 14px;
font-weight: 600;
line-height: 20px; 
border-radius: 12px;
background-color: #3470FF;
width: 136px;
height: 48px;
padding: 14px 44px;
transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #0B44CD;
  }
`;





