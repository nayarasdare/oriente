import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        min-height: 100%;
    }
    body {
        background: #e6ecf0;
        -webkit-font-smoothing: antialised !important;
    }
    body, input, button, textarea {
        color: #000;
        font-size: 14px;
        font-family: Nunito, Helvetica, sans-serif;
    }
    h1,h2,h3,h4,h5,h6,span{
        font-family: Nunito, Helvetica, sans-serif;
        font-weight:normal;
    }
    a{
        text-decoration:none;
    }
    
`;