import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  position: fixed;
  height: ${({ theme }) => theme.navbarHeight};
  width: 100%;
  z-index: 90;
  top: 0;
  left: 0;
`;
