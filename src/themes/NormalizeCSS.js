import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  *:focus {
    outline: none !important;
  }

  *:active {
     outline:none !important;
  }
  
  html {
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    max-width: 100%;
    overflow: unset;
    -webkit-appearance: none !important;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    overflow-y: auto;
  }
  
  :focus {
    outline: none !important;
  }
  
  p, dd, dl, figure, blockquote {
    margin: 0;
  }
  
  ul, ol{
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  
  th {
    font-weight: 500;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-size: inherit;
    font-weight: 500;
    color: #000;
  }
  
  audio, video {
    display: block;
  }
  
  img {
    border: none;
  }
  
  
  iframe {
    border: none;
  }
  
  pre, code, kbd, samp {
    font-size: inherit;
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  
  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  
  a:hover{
    color: inherit;
  }
  
  a img{
    max-width: 100%;
    max-height: 100%;
  }
  
  abbr {
    border: none;
    text-decoration: none;
  }
  
  b, strong {
    font-weight: 500;
  }
  
  i, em {
    font-style: inherit;
  }
  dfn {
    font-style: inherit;
  }
  mark {
    background-color: transparent;
    color: inherit;
  }
  
  button, input, optgroup, select, textarea {
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;
    font: inherit;
    color: inherit;
    letter-spacing: inherit;
    -webkit-appearance: none !important;
  }
  
  button{
    cursor: pointer;
    border-radius: 0;
    -webkit-appearance: none;
    &:focus {
      outline: none !important;
    }
  }
  
  textarea {
    resize: none;
    overflow-y: auto;
    overflow-x: hidden;
  }
  
  fieldset {
    padding: 0;
    margin: 0;
    border: none;
  }
  legend {
    display: block;
    padding: 0;
    white-space: normal;
  }
  
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 1;
    transition: opacity .3s;
  }
  
  ::-moz-placeholder {
    color: inherit;
    opacity: 1;
    transition: opacity .3s;
  }
  
  :-moz-placeholder {
    color: inherit;
    opacity: 1;
    transition: opacity .3s;
  }
  
  :-ms-input-placeholder {
    color: inherit;
    opacity: 1;
    transition: opacity .3s;
  }
  
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }
  
  :focus::-moz-placeholder {
    opacity: 0;
  }
  
  :focus:-moz-placeholder {
    opacity: 0;
  }
  
  :focus:-ms-input-placeholder {
    opacity: 0;
  }
`
