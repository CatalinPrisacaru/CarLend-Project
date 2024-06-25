import React, { useContext, useState } from "react";
import { TypeWriterComponent } from "../../../features/TypeWriter/TypeWriterComponent";
import { signInWithEmailAndPassword } from "firebase/auth";
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
import AuthContext from "../../../hooks/userContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );

      loginUser(userCredential.user);
      handleGoHome();
    } catch (error) {
      setError(
        "Something went wrong. Please check your email and password and try again."
      );
    }
  };
  return (
    <PageContainer>
      <TypeWriterComponent />
      <ImageContainer />
      <FormContainer>
        <Form>
          <Logo />
          <Title>Login</Title>
          <Input
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: "red", fontSize: "small" }}>{error}</p>}
          <Button onClick={login}>Login</Button>

          <FancyText>
            Don't have an account?
            <FancyLink to="/register"> Register here</FancyLink>
          </FancyText>
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default LoginPage;
