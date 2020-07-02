import {createGlobalStyle} from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';
const GlobalStyle = createGlobalStyle`
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background-color: #E6E6E6;

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
    height: 100vh;
  }
  #root{
    height: 100vh;

  }
`
export default GlobalStyle;