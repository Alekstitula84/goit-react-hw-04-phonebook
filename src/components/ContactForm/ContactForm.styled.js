import styled from 'styled-components';

export const AddBtn = styled.button`
  background-color: green;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: block;
  font-size: 12px;
  font-weight: 400;
  height: 30px;
  list-style: none;
  margin-top: 10px;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  /* -webkit-user-select: none;
  touch-action: manipulation; */
  &:hover,
  &:focus {
    background-color: green;
  }
`;

export const Form = styled.form`
  padding: 10px;
`;