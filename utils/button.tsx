import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #707070;
  border-bottom: solid 4px #4d4d4d;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  transition: opacity 0.7s ease;

  :active {
    -ms-transform: translateY(4px);
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
    border-bottom: none;
  }

  :hover {
    opacity: 0.7;
  }
`;
