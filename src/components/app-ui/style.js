import styled from 'styled-components';
import BaseButton from './BaseButton';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: 'column';
`;

export const AuthContainer = styled.div`
  width: 65%;
  height: 100vh;
  padding-top: 12%;
  padding-bottom: 4%;
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  overflow: auto;
  text-align: center;
  @media (max-width: 876px) {
    width: 100%;
  }

  & .aside-container {
    height: calc(100vh - 16%);
    padding: 0 1rem;
  }

  & h2 {
    margin-bottom: 10px;
  }

  & .aside-child {
    width: 25rem;
    margin-top: 3rem;
    text-align: left;

    @media (max-width: 400px) {
      width: 20rem;
    }
  }

  & .bottom-center {
    text-align: center;
    margin-top: 3rem !important;

    a {
      display: inline-block;
      padding: 0.8rem;
      background: #f2f2f2;
      border-radius: 0.25rem;
      margin-right: 1rem;
      margin-top: 1rem;

      &:hover {
        background: #f1f1f1;
      }
      & i {
        color: #aaa;
        font-size: 1.2rem;
      }
    }
  }

  & .flex-box {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
  }
`;

export const SideBanner = styled.div`
  width: 35%;
  height: 100vh;
  background: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  position: relative;
  padding-top: 20rem;

  & .fixed {
    width: 100%;
    display: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
  }

  & h1 {
    color: ${({ theme }) => theme.btnText};
    width: 20rem;
    font-size: 2.56rem;
    margin-top: 2.19rem;
    margin-bottom: 1.39rem;
  }

  & ul {
    color: ${({ theme }) => theme.btnText};
    width: 20rem;
    font-size: 0.96rem;
    & li {
      margin-bottom: 0.853rem;
      line-height: 1.493rem;
    }
  }

  @media (max-width: 876px) {
    display: none;
  }
`;

export const InnerWrapper = styled.div`
  z-index: 10;
  position: relative;

  & img.side-logo {
    z-index: 10;
    height: 2.4rem;
  }
`;

export const CustomButton = styled(BaseButton)`
  width: ${props => (props.fullwidth ? '100%' : 'auto')};
  color: ${props => (props.color ? props.color : '#FFF')};
  background: ${props => (props.background ? props.background : '#0364FF')};
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap !important;
  align-items: center;
  padding: 1rem 0.6rem;
  margin: 0 0.2rem;
  border: 0;
  font-size: 100%;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;

  &:focus {
    outline: 1px solid #eee;
  }

  & i {
    padding-right: 10px;
  }

  @media (max-width: 768px) {
    & i {
      display: none;
    }
  }
`;

export const InputField = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.9rem;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1.5px solid ${({ theme }) => theme.grayTwo};
  width: 100%;
  &:focus {
    border: 2px solid ${({ theme }) => theme.blueTwo};
  }
  &:focus + label {
    /* top: -0.5rem;
    left: 0.8rem; */
    color: ${({ theme }) => theme.blueTwo};
    font-weight: 500;
    z-index: 10;
  }
  &:not(placeholder-shown).&:not(:focus) + label {
    top: -0.5rem;
    left: 0.8rem;
    font-size: 0.75rem;
    font-weight: 500;
    z-index: 10;
  }
`;

export const InputBox = styled.div`
  position: relative;
  height: 48px;
  width: 100%;
  margin: 0.75rem 0;
  text-align: left;
  & i {
    position: absolute;
    right: 1rem;
    top: 0.25rem;
    font-size: 22px;
    padding: 0.25rem;
    transition: 0.4s;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  /* left: 1rem;
  top: 1rem; */
  top: -0.5rem;
  left: 0.8rem;
  padding: 0 0.25rem;
  background-color: #fff;
  transition: 0.4s;
  font-size: 0.8rem !important;
`;

export const BlueInputField = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.9rem;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1.5px solid ${({ theme }) => theme.grayTwo};
  width: 100%;
  &:focus + label {
    /* top: -0.5rem;
    left: 0.8rem; */
    color: ${({ theme }) => theme.blueTwo};
    font-weight: 500;
    z-index: 10;
  }
  &:not(placeholder-shown).&:not(:focus) + label {
    top: -0.5rem;
    left: 0.8rem;
    font-size: 0.75rem;
    font-weight: 500;
    z-index: 10;
  }
`;

export const BlueInputBox = styled.div`
  position: relative;
  height: 48px;
  width: 100%;
  margin: 0.75rem 0;
  text-align: left;
  & i {
    position: absolute;
    right: 1rem;
    top: 0.25rem;
    font-size: 22px;
    padding: 0.25rem;
    transition: 0.4s;
  }
`;

export const BlueInputLabel = styled.label`
  position: absolute;
  /* left: 1rem;
  top: 1rem; */
  top: -0.5rem;
  left: 0.8rem;
  padding: 0 0.25rem;
  background-color: #fff;
  transition: 0.4s;
  color #0064cc; 
`;
