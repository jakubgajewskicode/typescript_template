import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #fedc43b2;
  border-bottom: solid 4px #1f1f1f;
  border-radius: 3px;
  cursor: pointer;
  color: #1f1f1f;
  width: 190px;
  height: 45px;

  :focus {
    outline: 0;
  }
  :active {
    -ms-transform: translateY(4px);
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
    border-bottom: none;
  }
`;
