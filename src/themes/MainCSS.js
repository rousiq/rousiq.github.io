import {createGlobalStyle} from 'styled-components'
import {mediaQueries} from 'constants/mediaQueries'

export default createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
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
    font-weight: 700;
    color: ${({theme}) => theme.color.primary};
    @media ${mediaQueries.tabletM}{
      font-size: 40px;
      line-height: 55px;
    }
    @media ${mediaQueries.mobileL}{
      font-size: 35px;
      line-height: 45px;
    }
  }
`
