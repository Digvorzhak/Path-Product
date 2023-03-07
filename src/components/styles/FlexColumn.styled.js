import styled from "styled-components";

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  & > div,
  & > ul {
    flex: 1;
    margin-top: 10px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
