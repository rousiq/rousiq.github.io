import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  body{
    background: ${({theme}) => theme.background.primary};
    color: ${({theme}) => theme.color.primary};
    font-size: 16px;
    line-height: 110%;
  }
  h1 {
    font-size: 54px;
    letter-spacing: 0.24px;
    line-height: 70px;
    margin-bottom: 16px;
  }
`
