import styled from 'styled-components';

const Section = styled.header`
  display: flex;
  justify-content: space-between;
`;

const SvgIcon = styled.div`
  cursor: pointer;

  :hover {
    opacity: 0.3;
  }
`;

export { Section, SvgIcon };
