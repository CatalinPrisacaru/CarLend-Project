import React, { useContext, useState, useRef, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
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
import AuthContext from "../../../hooks/userContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [error, setError] = useState("");
  const [resetMode, setResetMode] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const cooldownTimerRef = useRef(null);

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
      const errorCode = error.code;
      let errorMessage;

      switch (errorCode) {
        case "auth/missing-password":
          errorMessage = "Password is missing. Please enter your password.";
          break;
        case "auth/invalid-email":
          errorMessage =
            "The email address is not valid. Please enter a valid email.";
          break;
        case "auth/user-not-found":
          errorMessage =
            "No user found with this email. Please check your email.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password. Please try again.";
          break;
        case "auth/invalid-credential":
          errorMessage =
            "Invalid credentials. Please check your email and password and try again.";
          break;
        default:
          errorMessage =
            "Something went wrong. Please check your email and password and try again.";
          break;
      }

      setError(errorMessage);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (isCooldown) {
      setError(
        "Please wait 30 seconds before attempting to reset your password again."
      );
      return;
    }

    try {
      setIsCooldown(true);
      cooldownTimerRef.current = setTimeout(() => {
        setIsCooldown(false);
      }, 30000);

      await sendPasswordResetEmail(auth, resetEmail);
      setError("");
      setResetMode(false);
      alert("Password reset email sent. Check your inbox.");
    } catch (error) {
      setError(error.message);
      setIsCooldown(false);
    }
  };

  useEffect(() => {
    return () => {
      if (cooldownTimerRef.current) {
        clearTimeout(cooldownTimerRef.current);
      }
    };
  }, []);

  return (
    <PageContainer>
      <ImageContainer />
      <FormContainer>
        <Form>
          <Logo />
          {!resetMode ? (
            <>
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
              <Button onClick={login}>Login</Button>
              {error && (
                <p style={{ color: "red", fontSize: "small" }}>{error}</p>
              )}
              <FancyText>
                <FancyLink
                  onClick={() => {
                    setResetMode(true);
                    setError("");
                  }}
                >
                  Forgot Password?
                </FancyLink>
              </FancyText>
              <FancyText>
                Don't have an account?
                <FancyLink to="/register"> Register here</FancyLink>
              </FancyText>
            </>
          ) : (
            <>
              <Title>Forgot Password</Title>
              <Input
                type="text"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              <Button onClick={handleForgotPassword}>Reset Password</Button>
              {error && (
                <p style={{ color: "red", fontSize: "small" }}>{error}</p>
              )}
              <FancyText>
                <FancyLink
                  onClick={() => {
                    setResetMode(false);
                    setError("");
                  }}
                >
                  Back to Login
                </FancyLink>
              </FancyText>
            </>
          )}
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default LoginPage;
