import styled from 'styled-components';

export const DeleteBtn = styled.button`
  background-color: grey;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  height: 30px;
  list-style: none;
  margin-left: 10px;
  margin-bottom: 10px;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  /* -webkit-user-select: none;
  touch-action: manipulation; */
  &:hover,
  &:focus {
    background-color: tomato;
  }
`;