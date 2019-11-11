import React from 'react'
import styled from 'styled-components'
import T from 'languages'

const Wrap = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: calc(85vh - 100px);
`
const Description = styled('p')`
  display: block;
  font-size: 22px;
  line-height: 40px;
  width: 740px;
`

const Cover = () => {
  return (
    <Wrap>
      <h1><T>Здравствуй! Я Руслан Мингазов, Веб-Разработчик из Москвы.</T></h1>
      <Description><T>В настоящее время живу в Москве. Специализируюсь на разработке сайтов и Веб-Приложений. Работаю с HTML, CSS и JS. Опыт разработки Single Page Applications (ReactJS, Redux, RestAPI, PWA). Умею работать с Git.</T></Description>
    </Wrap>
  )
}

export default Cover
