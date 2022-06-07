import styled from "styled-components";

export const Form = () => {
  return (
    <>
      <Div>
        <Button>
          <span style={{ fontWeight: "600", color: "#fff",  }}>
            Try it free 7 days
          </span>{" "}
          then $20/mo. thereafter
        </Button>

        <FormStyle action="">
          <Input type="text" name="name" id="name" />
          <Label htmlFor="name">Firt Name</Label>

          <Input type="text" name="lastName" id="lastName" />
          <Label htmlFor="lastName">Last Name</Label>

          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email@example/com"
          />
          <Label htmlFor="email">Email</Label>

          <Input type="password" name="password" id="password" />
          <Label htmlFor="password">Password</Label>

          <InputSubmit type="submit" value="CLAIM YOUR FREE TRIAL" />
          <Label htmlFor="submit" hidden>
            Submit
          </Label>
          <P>
            By clicking the button, you are agreeing to our
            <A href="#">Terms and Services</A>
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
  @media (max-width: 780px) {
    width: 50vw;
    margin-top: 0;
    margin-bottom: 50px;
  }
  @media (max-width: 425px) {
    width: 80vw;
    margin-top: 0;
    margin-bottom: 50px;
  }
`;

const FormStyle = styled.form`
  background: #fff;
  margin-top: 1.5rem;
  padding: 2.5rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40vw;
  border-radius: 10px;
  @media (max-width: 780px) {
    width: 50vw;
    padding: 1rem 0;
    margin-top: 0.5rem;
  }
  @media (max-width: 425px) {
    width: 80vw;
  }
`;

const Input = styled.input`
  border-radius: 5px;
  height: 50px;
  width: 85%;
  border: 1.8px solid hsl(0, 100%, 74%);
  color: hsl(0, 100%, 74%);
  &::placeholder {
    color: hsl(0, 100%, 74%);
    padding-left: 10px;
    font-weight: 600;
    font-size: 15px;
  }
`;

const Label = styled.label`
  margin-bottom: 2rem;
  margin-right: -15rem;
  font-size: 12px;
  font-weight: 500;
  color: hsl(0, 100%, 74%);
`;

const InputSubmit = styled.input`
  border-radius: 5px;
  color: #fff;
  height: 50px;
  width: 85%;
  background-color: hsl(154, 59%, 51%);
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 15px;
`;

const P = styled.p`
  font-size: 10px;
  margin-top: 15px;
  margin-left: 45px;
  padding-top: 1px;
  width: 70%;
  color: hsl(246, 25%, 77%);
`;

const A = styled.a`
  text-decoration: none;
  color: hsl(0, 100%, 74%);
  font-weight: 600;
`;

const Button = styled.button`
  height: 55px;
  border-radius: 5px;
  border: none;
  background: hsl(248, 32%, 49%);
  color: hsl(246, 25%, 77%);
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;
