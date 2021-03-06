import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background: #ffcb05;
  height: 56px;
  border-radius: 8px;
  border: 0;
  padding: 16px;
  font-weight: 500;
  font-size: 0 16px;
  width: 100%;
  margin-top: 33px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.1, '#ffcb05')};
  }
`;
