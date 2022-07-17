import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  position: relative;

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;

      div {
        height: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 1rem;
        border-radius: 1rem;
        background: #212529;
        margin-left: 1rem;
        text-align: center;
        padding-top: 0;

        h1 {
          font-size: 2rem;
          border-bottom: 1px solid;
        }

        h1, span {
          color: ${({theme}) => theme.font.colors.blue300};
        }

        .links-dashboards{
          margin-top: 1rem;
          a {
            position: relative;
            width: 100%;
            height: 2rem;
            border-radius: 2rem;
            background: ${({theme}) => theme.colors.background.gray700};
            margin: 0 1rem;
            padding: .5rem 1rem;
            color: ${({theme}) => theme.font.colors.white200};

            ::after {
              content: '';
              position: absolute;
              width: 10%;
              left: 50%;
              transform: translateX(-50%);
              bottom: 0;
              border: 1px solid #A0C4FF;
              transition: 250ms;
            }

            :hover::after {
              width: calc(100% - 20%);
            }
          }
        }
      }

      p {
        font-weight: 400;
      }

      p span {
        font-size: 1.5rem;
        font-weight: 700;
      }
    }

    p {
      max-width: 750px;
      text-align: justify;
    }

    img {
      border-radius: 10px;
      transition: .250s;
      transform: scale(.95);

      :hover {
        transform: scale(1);
        cursor: pointer;
      }
    }
  }
`
