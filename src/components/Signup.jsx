


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaPhone } from 'react-icons/fa';
import axios from 'axios';

const Signup = () => {
  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    mobileNumber: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    setErrorMsg('');
    setSuccessMsg('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/createuser', formValue, {
        headers: { 'Content-Type': 'application/json' }
      });
      setSuccessMsg(response.data.message);
      setErrorMsg('');
      // setFormValue({
      //   username: '',
      //   email: '',
      //   mobileNumber: '',
      //   password: ''
      // });

      setTimeout(() => {
        setSuccessMsg('');
      }, 3000);
    } catch (error) {
      if (error.response) {
        setErrorMsg(error.response.data.message || 'Signup failed');
      } else {
        setErrorMsg('Server error, please try again later');
      }
      setSuccessMsg('');
    }
  };

  return (
    <Container>
      <Title>Create Account</Title>

      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Icon><FaUser /></Icon>
          <Input
            type="text"
            placeholder="Full name"
            name="username"
            value={formValue.username}
            onChange={handleInputChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Icon><FaEnvelope /></Icon>
          <Input
            type="email"
            placeholder="Email address"
            name="email"
            value={formValue.email}
            onChange={handleInputChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Icon><FaPhone /></Icon>
          <Input
            type="tel"
            placeholder="Mobile Number"
            name="mobileNumber"
            value={formValue.mobileNumber}
            onChange={handleInputChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Icon><FaLock /></Icon>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            name="password"
            value={formValue.password}
            onChange={handleInputChange}
            required
          />
          <EyeIcon onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </EyeIcon>
        </InputWrapper>

        <Terms>
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
          </label>
        </Terms>

        <Button type="submit">Sign Up</Button>

        {successMsg && <Success>{successMsg}</Success>}
        {errorMsg && <Error>{errorMsg}</Error>}
      </Form>

      <FooterText>
        Already have an account? <StyledLink to="/login">Log in</StyledLink>
      </FooterText>
    </Container>
  );
};

export default Signup;

// Styled Components
const Container = styled.div`
  max-width: 420px;
  margin: auto;
  padding: 2rem;
  background: #fff;
  margin-top: 4rem;
  border-radius: 16px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);

  @media(max-width: 500px) {
    padding: 1.5rem;
    margin: 2rem 1rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
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
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #888;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4e9af1;
    box-shadow: 0 0 5px rgba(78, 154, 241, 0.5);
  }
`;

const EyeIcon = styled.i`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: #888;
  cursor: pointer;
`;

const Terms = styled.div`
  font-size: 0.85rem;
  margin-bottom: 1rem;

  label {
    margin-left: 0.5rem;
    color: #333;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Success = styled.p`
  color: green;
  text-align: center;
  margin-top: 1rem;
  font-weight: 600;
`;

const Error = styled.p`
  color: red;
  text-align: center;
  margin-top: 1rem;
  font-weight: 600;
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
