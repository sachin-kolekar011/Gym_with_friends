import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Menu, X, LogIn, LogOut, Users, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
  export default function AdminNavbar({ isAuthenticated, handleAuthToggle }) {

    // NavbarStyles.js or inside Navbar.jsx



 const Nav = styled.nav`
  width: 100%;
  background: white;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  z-index: 999;
`;

 const NavContainer = styled.div`
  max-width: 1200px;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

 const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #0070f3;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
`;

 const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

 const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

 const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: white;
  padding: 1rem 1.5rem;
  border-top: 1px solid #eee;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.03);
  @media (min-width: 768px) {
    display: none;
  }
`;

 const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  &:hover {
    color: #0070f3;
  }
`;

 const AuthButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #0070f3;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  font-size: 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: #005fd0;
  }
`;


  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleAuthClick = () => {
    handleAuthToggle();
    navigate(isAuthenticated ? "/login" : "/dashboard");
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <Truck size={22} />
          <span>Kaarmik</span>
        </Logo>

        <MenuIcon onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </MenuIcon>

        <DesktopMenu>
          <StyledLink to="/usertable">
            <Users size={18} />
            <span>User Table</span>
          </StyledLink>
          <StyledLink to="/movementtable">
            <Truck size={18} />
            <span>Movement Table</span>
          </StyledLink>

          <AuthButton
            whileTap={{ scale: 0.95 }}
            onClick={handleAuthClick}
          >
            {isAuthenticated ? (
              <>
                <LogOut size={18} />
                <span>Logout</span>
              </>
            ) : (
              <>
                <LogIn size={18} />
                <span>Login</span>
              </>
            )}
          </AuthButton>
        </DesktopMenu>
      </NavContainer>

      {isOpen && (
        <MobileMenu>
          <StyledLink to="/usertable" onClick={toggleMenu}>
            <Users size={18} />
            <span>User Table</span>
          </StyledLink>
          <StyledLink to="/movementtable" onClick={toggleMenu}>
            <Truck size={18} />
            <span>Movement Table</span>
          </StyledLink>
          <StyledLink as="button" onClick={() => {
            handleAuthClick();
            toggleMenu();
          }}>
            {isAuthenticated ? (
              <>
                <LogOut size={18} />
                <span>Logout</span>
              </>
            ) : (
              <>
                <LogIn size={18} />
                <span>Login</span>
              </>
            )}
          </StyledLink>
        </MobileMenu>
      )}
    </Nav>
  );
}
