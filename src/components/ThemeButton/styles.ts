import styled from 'styled-components';

export const Container = styled.button`
  position: absolute;
  background: transparent;
  height: 31px;
  width: 139px;
  left: 100px;
  border: 1px solid #4b4b4d;
  bottom: 20px;
  border-radius: 22px;

  svg {
    -webkit-transform: scaleX(-1);
  }
`;
