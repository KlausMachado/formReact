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
  padding-top: 15rem;
  padding-left: 0.05rem;
  margin-right: 0.8rem;
  color: #fff;
  @media (max-width: 780px) {
    width: 50vw;
    heigth: 40vh;
    padding-top: 0.02rem;
    margin-bottom: 0.625rem;
  }

  @media (max-width: 425px) {
    width: 80vw;
    text-align: center;
  }
`;
const H1 = styled.h1`
  font-size: 2.625rem;
  line-height: 3rem;
  @media (max-width: 780px) {
    margin-bottom: 0.3125rem;
  }
`;
