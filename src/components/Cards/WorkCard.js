import React, {useRef, useEffect} from 'react'
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
  transform: scale(.5);
  opacity: 0;
  transition: background-position .5s ease-in-out, 1s transform ease-in-out, 1s opacity ease-in-out;
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
  h3{
    font-weight: 500;
    font-size: 20px;
    line-height: 43px;
    color: #fff;
  }
  p{
    font-size: 18px;
    color: #fff;
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
    subtitle,
    img
  } = props

  const myRef = useRef(null)

  const visible = () => {
    const el = myRef.current
    const targetPosition = {
      top: window.pageYOffset + el.getBoundingClientRect().top,
      left: window.pageXOffset + el.getBoundingClientRect().left,
      right: window.pageXOffset + el.getBoundingClientRect().right,
      bottom: window.pageYOffset + el.getBoundingClientRect().bottom
    }
    const windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    }
    if ((targetPosition.bottom > windowPosition.top &&
      targetPosition.top < windowPosition.bottom &&
      targetPosition.right > windowPosition.left &&
      targetPosition.left < windowPosition.right) ||
      window.pageYOffset === 0) {
      el.style.transform = 'scale(1)'
      el.style.opacity = '1'
    } else {
      el.style.transform = 'scale(.5)'
      el.style.opacity = '0'
    }
  }
  useEffect(() => {
    visible()
    window.addEventListener('scroll', visible)
    return () => {
      window.removeEventListener('scroll', visible)
    }
  })

  return (
    <Wrap
      img={img}
      ref={myRef}
    >
      <div>
        <h4><T>{title}</T></h4>
        <h3><T>{subtitle}</T></h3>
        <p>{year}</p>
      </div>
      {link
        ? <a href={link}><T>Подробнее</T> <ArrowIcon size={16} /></a>
        : <span><T>Скоро</T></span>}
    </Wrap>
  )
}

export default WorkCard
