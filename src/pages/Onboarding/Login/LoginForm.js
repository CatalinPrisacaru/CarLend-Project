import React, { useEffect, useState } from "react";
import { TypeWriterComponent } from "../../../features/TypeWriter/TypeWriterComponent";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
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

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("User signed in:", currentUser);
        setUser(currentUser);
      } else {
        console.log("No user signed in");
        setUser(null);
        setUsername("");
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, username, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
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
          <Button onClick={login}>Login</Button>
          <p>{user?.email} is Logged in - </p>

          <FancyText>
            Don't have an account?
            <FancyLink to="/register"> Register here</FancyLink>
          </FancyText>

          <button onClick={logout}>Logout</button>
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default LoginPage;
