import React from 'react'
import styled from 'styled-components'
import T from 'languages'
import {mediaQueries} from 'constants/mediaQueries'

const Wrap = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: calc(85vh - 100px);
  max-height: 700px;
  @media ${mediaQueries.tabletM}{
    height: unset;
    padding: 120px 0;
  }
  @media ${mediaQueries.mobileL}{
    padding: 50px 0;
  }
`
const Description = styled('p')`
  display: block;
  font-size: 22px;
  line-height: 40px;
  width: 740px;
  max-width: 80%;
  @media ${mediaQueries.tabletM}{
    font-size: 18px;
    line-height: 30px;
    max-width: 100%;
  }
  @media ${mediaQueries.mobileL}{
    font-size: inherit;
    line-height: 165%;
  }
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
