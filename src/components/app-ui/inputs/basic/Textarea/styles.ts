import styled from "styled-components";

export const TextareaField = styled.textarea<any>`
  padding: 0.9rem;
  width: 100%;
  minheight: 100px;
  border-radius: 4px;
  border: 1.5px solid
    ${({theme, errorText}) => (!errorText ? theme.grayTwo : "red")};
  width: 100%;
  resize: none;
`;
