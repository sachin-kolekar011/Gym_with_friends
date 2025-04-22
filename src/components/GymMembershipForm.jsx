
// import React, { useState } from "react";
// import styled from "styled-components";
// import { FaDumbbell } from "react-icons/fa";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { jsPDF } from "jspdf";
// import scannerPhoto from "../assets/PhonePay_photo_sachin.jpg";

// const Container = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   padding: 3rem 2rem;
//   background: #f3f6fa;
//   font-family: "Segoe UI", sans-serif;
// `;

// const FormCard = styled.form`
//   background: #ffffff;
//   padding: 2.5rem;
//   border-radius: 16px;
//   box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
//   width: 100%;
//   max-width: 600px;
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   color: #0c3d91;
//   text-align: center;
//   margin-bottom: 1.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
// `;

// const FieldGroup = styled.div`
//   margin-bottom: 1.2rem;
// `;

// const Label = styled.label`
//   display: block;
//   font-weight: 600;
//   margin-bottom: 0.4rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.6rem 0.75rem;
//   border-radius: 8px;
//   border: 1px solid #ccc;
//   font-size: 1rem;
//   &:focus {
//     outline: none;
//     border-color: #0c3d91;
//   }
// `;

// const RadioGroup = styled.div`
//   display: flex;
//   gap: 1.5rem;
//   align-items: center;
// `;

// const RadioLabel = styled.label`
//   font-weight: 500;
//   input {
//     margin-right: 0.4rem;
//   }
// `;

// const Button = styled.button`
//   background: #0c3d91;
//   color: white;
//   border: none;
//   padding: 0.9rem;
//   font-size: 1rem;
//   font-weight: 600;
//   width: 100%;
//   border-radius: 10px;
//   cursor: pointer;
//   margin-top: 1rem;
//   transition: background 0.3s;
//   &:hover {
//     background: #0951bd;
//   }
// `;

// const SuccessMessage = styled.p`
//   text-align: center;
//   color: green;
//   font-weight: 600;
//   margin-top: 1rem;
// `;

// const ErrorMessage = styled.p`
//   text-align: center;
//   color: red;
//   font-weight: 600;
//   margin-top: 1rem;
// `;

// const StyledImage = styled.img`
//   height: 10rem;
//   width: auto;
//   border-radius: 4px;
// `;

// const GymMembershipForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     gender: "",
//     weight: "",
//     height: "",
//     address: "",
//     city: "",
//     email: "",
//     mobileNo: "",
//     gymBefore: "",
//     membershipType: "",
//   });

//   const [message, setMessage] = useState(null);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const membershipPrices = {
//     Starter: 599,
//     Pro: 999,
//     Elite: 1499,
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const generateInvoice = () => {
//     const doc = new jsPDF();
//     const membershipPrice = membershipPrices[formData.membershipType] || 0;

//     doc.setFontSize(20);
//     doc.text("Vishwa Gym Membership Invoice", 10, 20);

//     doc.setFontSize(12);
//     doc.text(`Name: ${formData.firstName} ${formData.lastName}`, 10, 40);
//     doc.text(`Gender: ${formData.gender}`, 10, 50);
//     doc.text(`Membership Type: ${formData.membershipType}`, 10, 60);
//     doc.text(`Membership Price: ${membershipPrice} Rupees Only`, 10, 70);
//     doc.text(`Mobile Number: ${formData.mobileNo}`, 10, 80);
//     doc.text(`Email: ${formData.email}`, 10, 90);
//     doc.text(`Address: ${formData.address}, ${formData.city}`, 10, 100);

//     doc.setFontSize(16);
//     doc.text("Thank you for joining Vishwa Gym!", 10, 120);

//     doc.save("Gym_Membership_Invoice.pdf");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(null);
//     setError(null);
//     try {
//       await axios.post("http://localhost:4000/membershipform", formData);
//       setMessage("Application submitted successfully! Our team will contact you soon!");

//       generateInvoice();

//       setFormData({
//         firstName: "",
//         lastName: "",
//         gender: "",
//         weight: "",
//         height: "",
//         address: "",
//         city: "",
//         email: "",
//         mobileNo: "",
//         gymBefore: "",
//         membershipType: "",
//       });

//       setTimeout(() => {
//         setMessage(null);
//         navigate("/about");
//       }, 5000);
//     } catch (err) {
//       console.error(err);
//       setError("There was a problem submitting your application.");
//       setTimeout(() => setError(null), 3000);
//     }
//   };

//   return (
//     <Container>
//       <FormCard onSubmit={handleSubmit}>
//         <Title>
//           <FaDumbbell />
//           Join Vishwa Gym
//         </Title>
//         <FieldGroup>
//           <Label>First Name</Label>
//           <Input name="firstName" value={formData.firstName} onChange={handleChange} required />
//         </FieldGroup>
//         <FieldGroup>
//           <Label>Last Name</Label>
//           <Input name="lastName" value={formData.lastName} onChange={handleChange} required />
//         </FieldGroup>
//         <FieldGroup>
//           <Label>Gender</Label>
//           <RadioGroup>
//             <RadioLabel>
//               <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} />
//               Male
//             </RadioLabel>
//             <RadioLabel>
//               <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} />
//               Female
//             </RadioLabel>
//           </RadioGroup>
//         </FieldGroup>
//         <FieldGroup>
//           <Label>Weight (kg)</Label>
//           <Input name="weight" type="number" value={formData.weight} onChange={handleChange} required />
//         </FieldGroup>
//         <FieldGroup>
//           <Label>Height (cm)</Label>
//           <Input name="height" type="number" value={formData.height} onChange={handleChange} required />
//         </FieldGroup>
//         <FieldGroup>
//           <Label>Address</Label>
//           <Input name="address" value={formData.address} onChange={handleChange} required />
//         </FieldGroup>
//         <FieldGroup>
//           <Label>City</Label>
//           <Input name="city" value={formData.city} onChange={handleChange} required />
//         </FieldGroup>
//         <FieldGroup>
//           <Label>Email</Label>
//           <Input name="email" type="email" value={formData.email} onChange={handleChange} required />
//         </FieldGroup>
//         <FieldGroup>
//           <Label>Mobile Number</Label>
//           <Input name="mobileNo" type="tel" value={formData.mobileNo} onChange={handleChange} required />
//         </FieldGroup>
//         <FieldGroup>
//           <Label>Have you been to a gym before?</Label>
//           <RadioGroup>
//             <RadioLabel>
//               <input type="radio" name="gymBefore" value="Yes" checked={formData.gymBefore === "Yes"} onChange={handleChange} />
//               Yes
//             </RadioLabel>
//             <RadioLabel>
//               <input type="radio" name="gymBefore" value="No" checked={formData.gymBefore === "No"} onChange={handleChange} />
//               No
//             </RadioLabel>
//           </RadioGroup>
//         </FieldGroup>
//         <FieldGroup>
//           <Label>Membership Type</Label>
//           <RadioGroup>
//             <RadioLabel>
//               <input type="radio" name="membershipType" value="Starter" checked={formData.membershipType === "Starter"} onChange={handleChange} />
//               Starter
//             </RadioLabel>
//             <RadioLabel>
//               <input type="radio" name="membershipType" value="Pro" checked={formData.membershipType === "Pro"} onChange={handleChange} />
//               Pro
//             </RadioLabel>
//             <RadioLabel>
//               <input type="radio" name="membershipType" value="Elite" checked={formData.membershipType === "Elite"} onChange={handleChange} />
//               Elite
//             </RadioLabel>
//           </RadioGroup>
//           <br />
//           <FieldGroup>
//             <Label> Scan & Pay </Label>
//             <StyledImage src={scannerPhoto} alt="scanner photo" />
//           </FieldGroup>
//           <Button type="submit">Apply Now</Button>
//           {message && <SuccessMessage>{message}</SuccessMessage>}
//           {error && <ErrorMessage>{error}</ErrorMessage>}
//         </FieldGroup>
//       </FormCard>
//     </Container>
//   );
// };

// export default GymMembershipForm;

import React, { useState } from "react";
import styled from "styled-components";
import { FaDumbbell, FaCalendarAlt, FaFilePdf, FaFileExcel, FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import * as XLSX from 'xlsx';
import scannerPhoto from "../assets/PhonePay_photo_sachin.jpg";

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

const StyledImage = styled.img`
  height: 10rem;
  width: auto;
  border-radius: 4px;
`;

const DateRangeContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const DateInput = styled.input`
  width: 150px;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #0c3d91;
  }
`;

const AdminControls = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AdminButton = styled.button`
  background: #4a5568;
  color: white;
  border: none;
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #2d3748;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
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
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [tableData, setTableData] = useState([]);
  const [limit, setLimit] = useState(15);
  const [showTable, setShowTable] = useState(false);

  const membershipPrices = {
    Starter: 599,
    Pro: 999,
    Elite: 1499,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const generateInvoice = () => {
  //   const doc = new jsPDF();
  //   const membershipPrice = membershipPrices[formData.membershipType] || 0;

  //   doc.setFontSize(20);
  //   doc.text("Vishwa Gym Membership Invoice", 10, 20);

  //   doc.setFontSize(12);
  //   doc.text(`Name: ${formData.firstName} ${formData.lastName}`, 10, 40);
  //   doc.text(`Gender: ${formData.gender}`, 10, 50);
  //   doc.text(`Membership Type: ${formData.membershipType}`, 10, 60);
  //   doc.text(`Membership Price: ${membershipPrice} Rupees Only`, 10, 70);
  //   doc.text(`Mobile Number: ${formData.mobileNo}`, 10, 80);
  //   doc.text(`Email: ${formData.email}`, 10, 90);
  //   doc.text(`Address: ${formData.address}, ${formData.city}`, 10, 100);

  //   doc.setFontSize(16);
  //   doc.text("Thank you for joining Vishwa Gym!", 10, 120);

  //   doc.save("Gym_Membership_Invoice.pdf");
  // };

  const generateInvoice = () => {
    const doc = new jsPDF();
    const membershipPrice = membershipPrices[formData.membershipType] || 0;
  
    // ✅ Get current date & time
    const now = new Date();
    const formattedDate = now.toLocaleDateString(); // e.g., 4/21/2025
    const formattedTime = now.toLocaleTimeString(); // e.g., 3:45:12 PM
  
    doc.setFontSize(20);
    doc.text("Vishwa Gym Membership Invoice", 10, 20);
  
    doc.setFontSize(12);
    doc.text(`Date: ${formattedDate}`, 150, 20); // Top-right
    doc.text(`Time: ${formattedTime}`, 150, 27); // Top-right
  
    doc.text(`Name: ${formData.firstName} ${formData.lastName}`, 10, 40);
    doc.text(`Gender: ${formData.gender}`, 10, 50);
    doc.text(`Membership Type: ${formData.membershipType}`, 10, 60);
    doc.text(`Membership Price: ${membershipPrice} Rupees Only`, 10, 70);
    doc.text(`Mobile Number: ${formData.mobileNo}`, 10, 80);
    doc.text(`Email: ${formData.email}`, 10, 90);
    doc.text(`Address: ${formData.address}, ${formData.city}`, 10, 100);
  
    doc.setFontSize(16);
    doc.text("Thank you for joining Vishwa Gym!", 10, 120);
  
    doc.save("Gym_Membership_Invoice.pdf");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    try {
      await axios.post("http://localhost:4000/membershipform", formData);
      setMessage("Application submitted successfully! Our team will contact you soon!");

      generateInvoice();

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

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/membershipform?fromDate=${fromDate}&toDate=${toDate}&limit=${limit}`);
      setTableData(response.data);
      setShowTable(true);
    } catch (err) {
      console.error(err);
      setShowTable(false);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Membership Data", 10, 10);
    let y = 20;
    tableData.forEach((item) => {
      doc.text(JSON.stringify(item), 10, y);
      y += 10;
    });
    doc.save("Membership_Data.pdf");
  };

  // const generateExcel = () => {
  //   const worksheet = XLSX.utils.json_to_sheet(tableData);
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, "Membership Data");
  //   XLSX.writeFile(workbook, "Membership_Data.xlsx");
  // };

  return (
    <Container>
      <FormCard onSubmit={handleSubmit}>
        <Title>
          <FaDumbbell />
          Join Vishwa Gym
        </Title>
        <FieldGroup>
          <Label>First Name</Label>
          <Input name="firstName" value={formData.firstName} onChange={handleChange} required />
        </FieldGroup>
        <FieldGroup>
          <Label>Last Name</Label>
          <Input name="lastName" value={formData.lastName} onChange={handleChange} required />
        </FieldGroup>
        <FieldGroup>
          <Label>Gender</Label>
          <RadioGroup>
            <RadioLabel>
              <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} />
              Male
            </RadioLabel>
            <RadioLabel>
              <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} />
              Female
            </RadioLabel>
          </RadioGroup>
        </FieldGroup>
        <FieldGroup>
          <Label>Weight (kg)</Label>
          <Input name="weight" type="number" value={formData.weight} onChange={handleChange} required />
        </FieldGroup>
        <FieldGroup>
          <Label>Height (cm)</Label>
          <Input name="height" type="number" value={formData.height} onChange={handleChange} required />
        </FieldGroup>
        <FieldGroup>
          <Label>Address</Label>
          <Input name="address" value={formData.address} onChange={handleChange} required />
        </FieldGroup>
        <FieldGroup>
          <Label>City</Label>
          <Input name="city" value={formData.city} onChange={handleChange} required />
        </FieldGroup>
        <FieldGroup>
          <Label>Email</Label>
          <Input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </FieldGroup>
        <FieldGroup>
          <Label>Mobile Number</Label>
          <Input name="mobileNo" type="tel" value={formData.mobileNo} onChange={handleChange} required />
        </FieldGroup>
        <FieldGroup>
          <Label>Have you been to a gym before?</Label>
          <RadioGroup>
            <RadioLabel>
              <input type="radio" name="gymBefore" value="Yes" checked={formData.gymBefore === "Yes"} onChange={handleChange} />
              Yes
            </RadioLabel>
            <RadioLabel>
              <input type="radio" name="gymBefore" value="No" checked={formData.gymBefore === "No"} onChange={handleChange} />
              No
            </RadioLabel>
          </RadioGroup>
        </FieldGroup>
        <FieldGroup>
          <Label>Membership Type</Label>
          <RadioGroup>
            <RadioLabel>
              <input type="radio" name="membershipType" value="Starter" checked={formData.membershipType === "Starter"} onChange={handleChange} />
              Starter
            </RadioLabel>
            <RadioLabel>
              <input type="radio" name="membershipType" value="Pro" checked={formData.membershipType === "Pro"} onChange={handleChange} />
              Pro
            </RadioLabel>
            <RadioLabel>
              <input type="radio" name="membershipType" value="Elite" checked={formData.membershipType === "Elite"} onChange={handleChange} />
              Elite
            </RadioLabel>
          </RadioGroup>
          <br />
          <FieldGroup>
            <Label> Scan & Pay </Label>
            <StyledImage src={scannerPhoto} alt="scanner photo" />
          </FieldGroup>
          <Button type="submit">Apply Now</Button>
          {message && <SuccessMessage>{message}</SuccessMessage>}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </FieldGroup>
      </FormCard>
      {/* <AdminControls>
        <div>
          <DateRangeContainer>
            <Label>From:</Label>
            <DateInput type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
            <Label>To:</Label>
            <DateInput type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
          </DateRangeContainer>
          <Label>Limit:</Label>
          <Input type="number" value={limit} onChange={(e) => setLimit(e.target.value)} />
          <AdminButton onClick={fetchData}>
            <FaSearch /> Fetch Data
          </AdminButton>
        </div> */}
        {/* <div>
          <AdminButton onClick={generatePDF}>
            <FaFilePdf /> PDF
          </AdminButton>
          <AdminButton onClick={generateExcel}>
            <FaFileExcel /> Excel
          </AdminButton>
        </div> */}
      {/* </AdminControls> */}
      {/* {showTable && tableData.length > 0 && (
        <Table>
          <thead>
            <tr>
              <TableHeader>First Name</TableHeader>
              <TableHeader>Last Name</TableHeader>
              <TableHeader>Gender</TableHeader>
              <TableHeader>Weight</TableHeader>
              <TableHeader>Height</TableHeader>
              <TableHeader>Address</TableHeader>
              <TableHeader>City</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Mobile</TableHeader>
              <TableHeader>Gym Before</TableHeader>
              <TableHeader>Membership</TableHeader>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <TableData>{item.firstName}</TableData>
                <TableData>{item.lastName}</TableData>
                <TableData>{item.gender}</TableData>
                <TableData>{item.weight}</TableData>
                <TableData>{item.height}</TableData>
                <TableData>{item.address}</TableData>
                <TableData>{item.city}</TableData>
                <TableData>{item.email}</TableData>
                <TableData>{item.mobileNo}</TableData>
                <TableData>{item.gymBefore}</TableData>
                <TableData>{item.membershipType}</TableData>
              </tr>
            ))}
          </tbody>
        </Table> 
      )}*/}
    </Container>
  );
};

export default GymMembershipForm;