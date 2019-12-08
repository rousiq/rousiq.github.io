import React from 'react'
import styled from 'styled-components'
import T from 'languages'
import {mediaQueries} from 'constants/mediaQueries'

const Wrap = styled('footer')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  padding: 180px auto 0;
  height: 480px;
  font-size: 32px;
  letter-spacing: 0.13px;
  line-height: 52px;
  @media ${mediaQueries.tabletM}{
    height: unset;
    padding: 90px 0;
    font-size: 22px;
    line-height: 35px;
    max-width: 100%;
  }
  @media ${mediaQueries.mobileL}{
    padding: 20px 0 35px;
    font-size: inherit;
    line-height: 165%;
  }
`
const Div = styled('div')`
  a {
    color: ${({theme}) => theme.color.link};
  }
  a:hover{
    color: ${({theme}) => theme.color.linkHover};
    transition: ${({theme}) => theme.transition.primary};
  }
`

const Footer = () => {
  return (
    <Wrap>
      <Div><T>Заинтересованы в совместной работе?</T></Div>
      <Div><T>Напишите мне:</T> <a href={'mailto:mrousia@gmail.com'}>mrousia@gmail.com</a></Div>
    </Wrap>
  )
}

export default Footer
