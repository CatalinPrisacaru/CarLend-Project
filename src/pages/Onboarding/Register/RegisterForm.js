import React, { useState } from "react";
import { TypeWriterComponent } from "../../../features/TypeWriter/TypeWriterComponent";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, firestore } from "../../../firebase-config";
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
import { doc, setDoc } from "firebase/firestore";
import Logo from "../../../features/Logo/Logo";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const register = async () => {
    if (username.length < 3) {
      setError("Username must be at least 3 characters long.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: username });

      await setDoc(doc(firestore, "users", user.uid), {
        email: user.email,
        isAdmin: false,
        displayName: username,
      });

      setEmail("");
      setPassword("");
      setUsername("");
      setError("");
    } catch (error) {
      const errorMessage = error.message;

      if (errorMessage.includes("email-already-in-use")) {
        setError("The email is already in use.");
      } else if (errorMessage.includes("weak-password")) {
        setError("The password is too weak.");
      } else if (errorMessage.includes("missing-password")) {
        setError("Password is missing. Please enter your password.");
      } else if (errorMessage.includes("invalid-email")) {
        setError("The email address is not valid.");
      } else if (errorMessage.includes("missing")) {
        setError("The email address is not valid. Please enter a valid email.");
      } else {
        setError("Registration failed. Please try again.");
      }
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
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button onClick={register}>Register</Button>
          {error && <p style={{ color: "red", fontSize: "small" }}>{error}</p>}

          <FancyText>
            Have an account? <FancyLink to="/login"> Login here</FancyLink>
          </FancyText>
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default RegisterPage;
