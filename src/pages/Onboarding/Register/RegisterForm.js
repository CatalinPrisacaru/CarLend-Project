import React, { useState } from "react";
import { TypeWriterComponent } from "../../../features/TypeWriter/TypeWriterComponent";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../firebase-config";
import {
  Button,
  FancyLink,
  FancyText,
  Form,
  FormContainer,
  ImageContainer,
  Input,
  PageContainer,
  Title,
} from "../StyledForm";
import Logo from "../../../features/Logo/Logo";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        username,
        password
      );
      console.log(user, "signin");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <PageContainer>
      <TypeWriterComponent />
      <ImageContainer />
      <FormContainer>
        <Form>
          <Logo />
          <Title>Register</Title>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={register}>Register</Button>
          <FancyText>
            Have an account? <FancyLink to="/login"> Login here</FancyLink>
          </FancyText>
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default RegisterPage;
