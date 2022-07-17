import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  position: relative;

  div p {
    padding: 1rem;
    border-radius: 1rem;
    background: #212529;
  }

  .description {
    margin-top: 3rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      max-width: 750px;
      text-align: justify;
    }
  }
`
