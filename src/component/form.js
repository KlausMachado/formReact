import styled from "styled-components";

export const Form = () => {
  return (
    <>
      <Div>
        <Button>
          <span style={{ fontWeight: "bold" }}>Try it free 7 days</span> then
          $20/mo. thereafter{" "}
        </Button>

        <FormStyle action="">
          <label htmlFor="name" hidden>
            Firt Name
          </label>
          <Input type="text" name="name" id="name" />
          <label htmlFor="lastName" hidden>
            Last Name
          </label>
          <Input type="text" name="lastName" id="lastName" />
          <label htmlFor="email" hidden>
            Email
          </label>
          <Input type="email" name="email" id="email" />
          <label htmlFor="password" hidden>
            Password
          </label>
          <Input type="password" name="password" id="password" />
          <label htmlFor="submit" hidden>
            Submit
          </label>
          <InputSubmit type="submit" value="CLAIM YOUR FREE TRIAL" />
          <P>
            By clicking the button, you are agreeing to our{" "}
            <a href="#">Terms and Services</a>
          </P>
        </FormStyle>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  align-itens: center;
  justify-content: center;
  flex-direction: column;
`;
const FormStyle = styled.form`
  background: #fff;
  margin-top: 1.5rem;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40vw;
  border-radius: 10px;
`;

const Input = styled.input`
  margin-bottom: 1.5rem;
  border-radius: 5px;
  height: 35px;
  width: 85%;
  border: 1.8px solid hsl(0, 100%, 74%);
`;
const InputSubmit = styled.input`
  border-radius: 5px;
  color: #fff;
  height: 40px;
  width: 85%;
  background-color: hsl(154, 59%, 51%);
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 15px;
`;

const P = styled.p`
  font-size: 12px;
  margin-top: 0;
  padding-top: 1px;
  width: 85%;
`;

const Button = styled.button`
  height: 50px;
  border-radius: 5px;
  border: none;
  background: hsl(248, 32%, 49%);
  color: #fff;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;
