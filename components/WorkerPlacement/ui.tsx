import styled from 'styled-components';

const List = styled.ul`
  grid-column: span 4;
  text-align: center;
  list-style: none;
`;

const SectionSubHeader = styled.div`
  text-align: center;
`;

const ThanksMsg = styled.div`
  height: 50vh;
  position: relative;
`;

const StyledP = styled.p`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export { List, SectionSubHeader, ThanksMsg, StyledP };
