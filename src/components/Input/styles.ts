import styled from 'styled-components';

export const Container = styled.input`
  background: #f5f7fa;
  border-radius: 8px;
  border: 1px solid #7d7e80;
  padding: 16px;
  width: 100%;
  color: #1e1e1f;
  margin-bottom: 15px;

  &::placeholder {
    color: #7d7e80;
  }

  & + input {
    /* margin-top: 15px; */
  }
`;
