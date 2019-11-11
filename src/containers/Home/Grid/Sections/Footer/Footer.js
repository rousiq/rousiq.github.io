import React from 'react'
import styled from 'styled-components'
import T from 'languages'

const Wrap = styled('header')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  padding: 180px auto 0;
  height: 480px;
`
const Div = styled('div')`
  font-size: 32px;
  letter-spacing: 0.13px;
  line-height: 52px;
  a {
    color: ${({theme}) => theme.color.link};
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
