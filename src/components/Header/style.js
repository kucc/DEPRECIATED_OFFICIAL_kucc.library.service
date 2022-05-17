import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: white;
  border-top: 5px solid rgb(194, 32, 31);
  padding-left: 14.21%;
  padding-right: 14.21%;
  @media (max-width: 1224px) {
    height: 65px;
    padding-left: 5.64%;
    padding-right: 5.64%;
  }
`;

export const StyledHeaderLogoContainer = styled.div`
  margin-top: -4px;
  margin-right: 5px;
`;

export const StyledHeaderTextContainer = styled.div`
  display: flex;
`;

export const StyledHeaderText = styled.div`
  cursor: pointer;
  color: black;
  font-size: 15px;
  font-family: 'NexonBo';
  padding: 20px;
  padding-top: 25px;
  @media (max-width: 1224px) {
    font-size: 12px;
    padding: 8px;
    padding-top: 25px;
  }
`;
