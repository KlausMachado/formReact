import styled from "styled-components";

export const Text = () => {
  return (
    <>
      <Div>
        <H1>Learn to code by watching others</H1>
        <p style={{ margin: "0" }}>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, bet understanding how developers think is
          invaluable.
        </p>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: block;
  align-itens: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 0.05rem;
  margin-right: 0.8rem;
  color: #fff;

  @media (min-width: 2560px) {
    padding-top: 20rem;
    margin-right: 4rem;
    width: 60rem;
  }

  @media (max-width: 1440px) {
    padding-top: 17rem;
  }

  @media (max-width: 1024px) {
    padding-top: 20rem;
  }

  @media (max-width: 780px) {
    width: 50vw;
    heigth: 40vh;
    padding-top: 0.02rem;
    margin-bottom: 0.625rem;
    margin-left: 3rem;
  }

  @media (max-width: 425px) {
    width: 80vw;
    text-align: center;
    margin-left: 1rem;
    padding-top: 0;
  }
`;
const H1 = styled.h1`
  font-size: 2.625rem;
  line-height: 3rem;
  @media (max-width: 780px) {
    margin-bottom: 0.3125rem;
  }
`;
