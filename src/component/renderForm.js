import styled from "styled-components";
import { Form } from "./form";
import { Text } from "./Text";
import img from "../images/bg-intro-desktop.png";

export const RenderForm = () => {
  return (
    <>
      <Section>
        <Text />
        <Form />
      </Section>
    </>
  );
};

const Section = styled.section`
  display: flex;
  align-itens: center;
  justify-content: center;
  background-image: url(${img});
  background-color: hsl(0, 100%, 74%);
  padding: 5rem;
  height: 100vh;

  @media (max-width: 780px) {
    flex-wrap: wrap;
    background-color: hsl(0, 100%, 74%);
    width: 100vw;
    heigth: 100vh;
    padding: 0;
  }
  @media (max-width: 320px) {
    padding-bottom: 5rem;
  }
`;
