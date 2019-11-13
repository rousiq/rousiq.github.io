import React from 'react'
import styled from 'styled-components'
import workCover from 'images/workCover.jpg'
import {ChevronRight as ArrowIcon} from 'react-feather'
import T from 'languages'

const Wrap = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 56px 56px 48px 56px;
  margin-bottom: 40px;
  width: 472px;
  height: 600px;
  background: url(${({img}) => img || workCover}) no-repeat;
  background-size: cover;
  transition: background-position .5s ease-in-out;
  overflow: hidden;
  &:hover{
    background-position: -30px 0;
    transition: background-position .5s ease-in-out;
  }
  h4{
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #fff;
  }
  p{
    font-size: 18px;
    color: #fff;
    margin-top: 8px;
    line-height: 40px;
  }
  a, span{
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  a:hover{
    opacity: .8;
    transition: all .3s ease-in-out;
  }
`

const WorkCard = (props) => {
  const {
    link,
    title,
    year,
    img
  } = props

  return (
    <Wrap
      img={img}
    >
      <div>
        <h4><T>{title}</T></h4>
        <p>{year}</p>
      </div>
      {link
        ? <a href={link}><T>Подробнее</T> <ArrowIcon size={16} /></a>
        : <span><T>Скоро</T></span>}
    </Wrap>
  )
}

export default WorkCard
