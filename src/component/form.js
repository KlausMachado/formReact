import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required("First name is required !"),
    lastName: yup.string().required("Last name is required !"),
    email: yup.string().email("invalid email").required("Email is required !"),
    password: yup
      .string()
      .min(8, "minimum 8 digits")
      .required("Password is required !"),
  })
  .required();

export const GetForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (userData) => console.log(userData);

  return (
    <>
      <Div>
        <Button>
          <span style={{ fontWeight: "600", color: "#fff" }}>
            Try it free 7 days
          </span>{" "}
          then $20/mo. thereafter
        </Button>

        <Form action="" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <Span>{errors.firstName?.message}</Span>}
          <label htmlFor="name" hidden>
            Firt Name
          </label>

          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <Span>{errors.lastName?.message}</Span>}

          <label htmlFor="lastName" hidden>
            Last Name
          </label>

          <Input
            type="text"
            name="email"
            id="email"
            placeholder="email@example/com"
            {...register("email", { required: true })}
          />
          {errors.email && <Span>{errors.email?.message}</Span>}

          <label htmlFor="email" hidden>
            Email
          </label>

          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <Span>{errors.password?.message}</Span>}

          <label htmlFor="password" hidden>
            Password
          </label>

          <InputSubmit
            type="submit"
            value="CLAIM YOUR FREE TRIAL"
            style={{ cursor: "pointer" }}
          />
          <label htmlFor="submit" hidden>
            Submit
          </label>
          <P>
            By clicking the button, you are agreeing to our
            <A href="#">Terms and Services</A>
          </P>
        </Form>
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
    margin-bottom: 3.125rem;
  }
  @media (max-width: 425px) {
    width: 80vw;
    margin-top: 0;
    margin-bottom: 3.125rem;
  }
  @media (max-width: 320px) {
    margin-bottom: 4.125rem;
  }
`;

const Form = styled.form`
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
  height: 3.125rem;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  width: 85%;
  border: 1.8px solid hsl(0, 100%, 74%);
  color: hsl(0, 100%, 74%);
  ::placeholder {
    color: hsl(0, 100%, 74%);
    padding-left: 0.625rem;
    font-weight: 600;
    font-size: 0.9375rem;
  }
  :focus {
    outline: none;
    box-shadow: -1px 3px 5px hsl(0, 93%, 65%);
  }
`;

const InputSubmit = styled.input`
  border-radius: 5px;
  color: #fff;
  margin-top: 0.5rem;
  height: 3.125rem;
  width: 85%;
  background-color: hsl(154, 59%, 51%);
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  :hover {
    background: hsl(154, 56%, 37%);
  }
`;

const P = styled.p`
  font-size: 0.625rem;
  margin-top: 0.9375rem;
  margin-left: 2.8125rem;
  padding-top: 0.0625rem;
  width: 70%;
  color: hsl(246, 25%, 77%);

  @media (max-width: 1024px) {
    margin-left: 0.8125rem;
  }
  @media (max-width: 425px) {
    margin-left: 2rem;
  }
  @media (max-width: 320px) {
    margin-left: 0.5rem;
  }
`;

const Span = styled.span`
  font-size: 0.725rem;
  color: hsl(0, 100%, 74%);
  margin-top: -1rem;
  margin-left: 20rem;

  @media (max-width: 2560px) {
    margin-left: 45rem;
  }

  @media (max-width: 1440px) {
    margin-left: 22rem;
  }

  @media (max-width: 1024px) {
    margin-left: 13rem;
  }
  @media (max-width: 425px) {
    margin-left: 9rem;
  }
  @media (max-width: 320px) {
    margin-left: 4rem;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: hsl(0, 100%, 74%);
  font-weight: 600;
`;

const Button = styled.button`
  height: 3.4275rem;
  border-radius: 0.3125rem;
  border: none;
  background: hsl(248, 32%, 49%);
  color: hsl(246, 25%, 77%);
  font-size: 0.9375rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  cursor: pointer;
  :hover {
    background: hsl(248, 44%, 33%);
  }
`;
