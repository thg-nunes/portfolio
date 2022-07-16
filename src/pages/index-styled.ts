import styled from "styled-components";

export const HomePageStyle = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    height: calc(100vh - 4rem);
    display: flex;
    justify-content: center;
    flex-direction: column;

    p:nth-child(1), p:nth-child(3) {
      font-size: 2rem;
      line-height: 2rem;
      font-weight: 700;
    }

    p:nth-child(2) {
      height: 6rem;
      line-height: 6rem;
      font-size: 4rem;
      font-family: 'Edu VIC WA NT Beginner', cursiva;
      color: #FF007E;

      ::after {
        content: '!';
        transition: 1s ease-in;
        animation: pointOpacity 1s infinite alternate-reverse;
      }
    }
  }

@keyframes pointOpacity {
  from {
    opacity: 1;
  } to {
    opacity: 0;
  }
}
`
