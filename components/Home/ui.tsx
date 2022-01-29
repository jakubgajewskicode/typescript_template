import styled from 'styled-components';

import { device } from '../../utils/media';

export const Form = styled.form`
  text-align: center;
  padding-bottom: 15px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 25px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #ebebeb;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const Grid = styled.section`
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 35% 45% 100%;
  }
`;

export const PropertyTypes = styled.aside`
  grid-column: span 2;
  grid-row-start: 3;
  margin: 10px 10px 10px 20px;

  @media ${device.tablet} {
  }
`;

export const SearchSection = styled.section`
  grid-column: 4 / span 10;
  margin-top: 55px;
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  background-color: #ebebeb;
  padding: 10px;
`;

export const StyledLi = styled.li`
  cursor: pointer;
  margin: 10px 10px 10px 0;

  :hover {
    font-weight: bold;
  }
`;

export const Label = styled.label`
  margin: 0;
`;

export const StyledLabel = styled.label`
  margin: 0;
  font-weight: 600;
`;

export const SearchResults = styled.section`
  grid-column: 4 / span 10;
`;

export const Wrapper = styled.div``;

export const SubGrid = styled.div`
  display: flex;

  div:first-child {
    width: 30%;
  }
`;

export const StyledResultLabel = styled.div`
  width: 100%;
  text-align: center;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 25px;
`;

export const TH = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ebebeb;
  text-align: center;
  background-color: #ebebeb;
  border-right: 3px solid #ffffff;
`;

export const TD = styled.td`
  padding: 0.25rem;
  text-align: center;
  border-top: 1px solid #ebebeb;
  position: relative;
  padding: 10px;
`;

export const TickWrapper = styled.div`
  width: 15px;
  margin: auto;
`;

export const SelectedProperties = styled.section`
  grid-column: 4 / span 10;
  display: flex;
  flex-direction: column;
`;

export const MainSection = styled.section`
  grid-column: 4 / span 10;
`;

export const ButtonContainer = styled.div`
  width: 50%;
`;

export const StyledTBody = styled.tbody`
  background-color: #f4faff;
`;

export const StyledCheckbox = styled.input`
  cursor: pointer;
`;
