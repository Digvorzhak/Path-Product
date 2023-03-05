import styled from "styled-components";
import LinkButton from "../LinkButton";

export const PostStyle = styled.div`
  flex: 1 0 300px;
  height: 100%;
  background-color: #fff;
  /* border: 2px solid #403e41; */
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px;

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
    /* margin-top: 0; */
    @media (max-width: ${({ theme }) => theme.mobile}) {
      white-space: normal;
    }
  }

  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
  }

  p {
    margin-bottom: 0;
  }

  button {
    margin-top: auto;
    margin-bottom: 5px;
  }
`;
