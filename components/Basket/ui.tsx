import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  padding: 20px;
  padding: 20px 20px;
  justify-content: space-around;

  grid-row-start: 1;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Div = styled.div`
  text-align: center;
`;

const Title = styled.div`
  text-align: center;
`;

const Flex = styled.div`
  display: flex;
`;

const SlotsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 20%;
`;

const WorkerDetails = styled.div`
  width: 80%;
`;

export {
  StyledSection,
  ButtonWrapper,
  Div,
  Title,
  Flex,
  SlotsWrapper,
  WorkerDetails,
};
