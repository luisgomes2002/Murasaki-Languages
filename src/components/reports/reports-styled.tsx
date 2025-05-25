import styled from "styled-components";

export const ReportArea = styled.div`
  text-align: center;
  background-color: #0a0a0a;
  min-height: 100vh;
  color: #fff;
  padding: 20px;

  .report-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
