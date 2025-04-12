// GymMembershipForm.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { FaDumbbell } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";


// Styled Components
const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem 2rem;
  background: #f3f6fa;
  font-family: "Segoe UI", sans-serif;
`;

const FormCard = styled.form`
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 600px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #0c3d91;
  text-align: center;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const FieldGroup = styled.div`
  margin-bottom: 1.2rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #0c3d91;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const RadioLabel = styled.label`
  font-weight: 500;
  input {
    margin-right: 0.4rem;
  }
`;

const Button = styled.button`
  background: #0c3d91;
  color: white;
  border: none;
  padding: 0.9rem;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.3s;
  &:hover {
    background: #0951bd;
  }
`;

const SuccessMessage = styled.p`
  text-align: center;
  color: green;
  font-weight: 600;
  margin-top: 1rem;
`;

const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`;

const GymMembershipForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    weight: "",
    height: "",
    address: "",
    city: "",
    email: "",
    mobileNo: "",
    gymBefore: "",
    membershipType: "",
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    try {
      await axios.post("http://localhost:4000/membershipform", formData);
      setMessage("Application submitted successfully!\nOur team will contact you soon!");
      setFormData({
        firstName: "",
        lastName: "",
        gender: "",
        weight: "",
        height: "",
        address: "",
        city: "",
        email: "",
        mobileNo: "",
        gymBefore: "",
        membershipType: "",
      });
      setTimeout(() => {
        setMessage(null);
        navigate("/about");
      }, 5000);
  
    } catch (err) {
      console.error(err);
      setError("There was a problem submitting your application.");
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <Container>
      <FormCard onSubmit={handleSubmit}>
        <Title>
          <FaDumbbell />
          Join Vishwa Gym
        </Title>

        {/* First Name */}
        <FieldGroup>
          <Label>First Name</Label>
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </FieldGroup>

        {/* Last Name */}
        <FieldGroup>
          <Label>Last Name</Label>
          <Input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </FieldGroup>

        {/* Gender */}
        <FieldGroup>
          <Label>Gender</Label>
          <RadioGroup>
            <RadioLabel>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </RadioLabel>
          </RadioGroup>
        </FieldGroup>

        {/* Weight */}
        <FieldGroup>
          <Label>Weight (kg)</Label>
          <Input
            name="weight"
            type="number"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </FieldGroup>

        {/* Height */}
        <FieldGroup>
          <Label>Height (cm)</Label>
          <Input
            name="height"
            type="number"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </FieldGroup>

        {/* Address */}
        <FieldGroup>
          <Label>Address</Label>
          <Input
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </FieldGroup>

        {/* City */}
        <FieldGroup>
          <Label>City</Label>
          <Input
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </FieldGroup>

        {/* Email */}
        <FieldGroup>
          <Label>Email</Label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FieldGroup>

        {/* Mobile Number */}
        <FieldGroup>
          <Label>Mobile Number</Label>
          <Input
            name="mobileNo"
            type="tel"
            value={formData.mobileNo}
            onChange={handleChange}
            required
          />
        </FieldGroup>

        {/* Gym Before */}
        <FieldGroup>
          <Label>Have you been to a gym before?</Label>
          <RadioGroup>
            <RadioLabel>
              <input
                type="radio"
                name="gymBefore"
                value="Yes"
                checked={formData.gymBefore === "Yes"}
                onChange={handleChange}
              />
              Yes
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="gymBefore"
                value="No"
                checked={formData.gymBefore === "No"}
                onChange={handleChange}
              />
              No
            </RadioLabel>
          </RadioGroup>
        </FieldGroup>

        {/* Membership Type */}
        <FieldGroup>
          <Label>Membership Type</Label>
          <RadioGroup>
            <RadioLabel>
              <input
                type="radio"
                name="membershipType"
                value="Regular"
                checked={formData.membershipType === "Regular"}
                onChange={handleChange}
              />
              Regular
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="membershipType"
                value="Pro"
                checked={formData.membershipType === "Pro"}
                onChange={handleChange}
              />
              Pro
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="membershipType"
                value="VIP"
                checked={formData.membershipType === "VIP"}
                onChange={handleChange}
              />
              VIP
            </RadioLabel>
          </RadioGroup>
        </FieldGroup>

        <Button type="submit">Apply Now</Button>

        {message && <SuccessMessage>{message}</SuccessMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FormCard>
    </Container>
  );
};

export default GymMembershipForm;
