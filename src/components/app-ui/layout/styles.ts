import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  position: relative;
  background-color: rgb(250, 252, 255);
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const LayoutContent = styled.div`
  width: 100%;
  /* height: 100vh; */
  overflow: hidden;

  .layout {
    height: 100%;
  }
`;
