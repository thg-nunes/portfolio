import styled from "styled-components";

export const Container = styled.div`
  & section {
    width: 100%;
    max-width: 1200px;

    height: 3.5rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;

    nav ul {
      display: flex;
      height: 3.5rem;
      line-height: 3.5rem;


      a {
        position: relative;
        padding: 0 .5rem;

      }
      .link-active li::after {
        content: '';
        width: 100%;
        height: 2px;
        left: 0;
        bottom: 0;
        background: ${({theme}) => theme.colors.background.red200};
        border-radius: 10px 10px 0 0;
        position: absolute;
      }
    }
  }

  border-bottom: 1px solid rgb(255, 255, 255, .2);
`
