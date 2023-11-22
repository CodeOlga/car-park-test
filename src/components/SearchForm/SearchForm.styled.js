import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin-top: 65px;

  @media screen and (min-width: 880px) {
    flex-direction: row;
    align-items: flex-end;
    gap: 18px;
  }
`;

export const BrandPriceWrap = styled.div`
  display: flex;
  gap: 18px;
`;


export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: var(--label-text-cl);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 8px; 
`;

const inputStyles = `
  width: 140px;
  padding: 13px 0 13px 18px;
  font-size: 18px;
  border: 1px solid transparent;
  background-color: var(--input-bg-cl);
  color: var(--dark-text-cl);
  font-weight: 500;
  line-height: 20px;

  &::placeholder {
    opacity: 1;
  }
  &:hover {
    border-color: var(--backdrop-text-cl);
  }
  &:focus {
    outline: none;
    border: 2px solid var(--normal-state-bg-cl);
  }
`;

export const CustomInputLeft = styled.input`
  ${inputStyles}
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid var(--border-text-cl);
  margin-left: 0px;
`;

export const CustomInputRight = styled.input`
  ${inputStyles}
  border-radius: 0px 14px 14px 0px;
  margin-right: 0px;
`;

export const StyledButton = styled.button`
  color: var(--white-cl);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; 
  border-radius: 12px;
  background-color: var(--normal-state-bg-cl);
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: var(--pressed-state-bg-cl);
  }

  @media screen and (min-width: 880px) {
    margin-top: 0;
  }
`;




