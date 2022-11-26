import styled from 'styled-components';
import { button } from 'styles/Shared';

export const FormWrap = styled.form`
  padding: 0 20px;
`;

export const TextBox = styled.textarea`
  resize: none;
  width: 100%;
  height: 268px;
  padding: 14px 16px;
  border: 1px solid ${({ theme }) => theme.color.gray_2};
  border-radius: 6px;
`;

export const CategoryInput = styled.input`
  display: none;
`;

export const SubmitButton = styled.button`
  ${button}
  margin-bottom: 34px;
`;