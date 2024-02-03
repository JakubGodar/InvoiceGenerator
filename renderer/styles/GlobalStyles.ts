import styled, { createGlobalStyle } from "styled-components";
import './globals.css';

const GlobalStyles = createGlobalStyle`
 
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans';
    margin: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyles;

export const MainContainer = styled.div`
  padding-top: ${({ theme }) => theme.navbarHeight};
  overflow-x: hidden;
`;
