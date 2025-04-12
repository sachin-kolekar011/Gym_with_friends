
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import styled from 'styled-components';
import axios from 'axios';
import SocialLogin from './SocialLogin';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const Separator = styled.p`
  text-align: center;
  margin: 1rem 0;
  span {
    background: #fff;
    padding: 0 10px;
    color: #888;
  }
  &:before,
  &:after {
    content: '';
    display: inline-block;
    width: 40%;
    height: 1px;
    background: #ccc;
    vertical-align: middle;
    margin: 0 5px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1.2rem;
`;

const Icon = styled.i`
  position: absolute;
  top: 12px;
  left: 10px;
  color: #aaa;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 10px 10px 35px;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 15px;
  &:focus {
    border-color: #007bff;
  }
`;

const EyeIcon = styled.i`
  position: absolute;
  top: 12px;
  right: 10px;
  cursor: pointer;
  color: #888;
`;

const ForgotPassword = styled.a`
  font-size: 0.9rem;
  color: #007bff;
  text-align: right;
  display: block;
  margin-bottom: 1rem;
  text-decoration: none;
`;

const LoginButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const SignupPrompt = styled.p`
  text-align: center;
  margin-top: 1.2rem;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 14px;
  font-size: 24px;
  border: none;
  background: none;
  cursor: pointer;
  color: #666;
`;



const Login = ({ isModal = false, onClose }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:4000/login', formValue, {
        headers: { 'Content-Type': 'application/json' },
      });

      alert(response.data.message);
      navigate('/'); // Redirect to home page
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || "Invalid credentials");
      } else {
        alert("Server error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      {isModal && <CloseButton onClick={onClose}>&times;</CloseButton>}

      <Title>Log in with</Title>
      {/* <SocialLogin /> */}
      {/* <Separator><span>or</span></Separator> */}

      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Icon><FaEnvelope /></Icon>
          <Input
            type="email"
            name="email"
            value={formValue.email}
            placeholder="Email address"
            required
            onChange={handleInputChange}
          />
        </InputWrapper>

        <InputWrapper>
          <Icon><FaLock /></Icon>
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formValue.password}
            placeholder="Password"
            required
            onChange={handleInputChange}
          />
          <EyeIcon onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </EyeIcon>
        </InputWrapper>

        <ForgotPassword href="#">Forgot password?</ForgotPassword>

        <LoginButton type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </LoginButton>
      </Form>

      <SignupPrompt>
        Don't have an account? <StyledLink to="/signup">Sign up</StyledLink>
      </SignupPrompt>
    </LoginContainer>
  );
};

export default Login;

// ------------------------ Styled Components ------------------------

