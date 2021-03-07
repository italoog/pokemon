import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(120, 120, 120, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: #ffffff;
  width: 378px;
  height: 639px;
  max-width: 400px;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
`;
