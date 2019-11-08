import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  body{
    line-height: 18px;
    color: #000;
    background: #fff;
    font-size: 20px;
  }
  h1, h2 {
    font-size: 34px;
    line-height: 41px;
    font-weight: 700;
    color: #000;
  }
  h3 {
    font-size: 17px;
    line-height: 22px;
    font-weight: 500;
    color: #000;
  }
  h4 {
    font-weight: 500;
    color: #000;
    font-size: 15px;
    line-height: 18px;
  }
  button{
    border: none;
  }
`
