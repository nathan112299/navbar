// src/components/Navbar.js
import React from "react";
import styled from "styled-components";

// Estilo para o contêiner do Navbar
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: blue;
  color: white
`;

// Estilo para a logo (imagem)
const Logo = styled.img`
  width: 50px; /* Tamanho da logo */
  height: auto; /* Mantém a proporção da imagem */
`;

// Estilo para o container dos links
const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

// Estilo para os links de navegação
const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: #f39c12; /* Cor do hover */
  }
`;

// Componente Navbar
const Navbar = () => {
  return (
    <NavbarContainer>
      {/* Logo com a imagem luffy.png */}
      <Logo src="luffy.jpg" alt="Logo" /> {/* Caminho da imagem */}
      {/* Links de navegação */}
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/sobre">Sobre</NavLink>
        <NavLink href="/contato">Contato</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
