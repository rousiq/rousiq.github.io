import React, {useRef} from 'react'
import styled from 'styled-components'
import workCover from 'images/workCover.jpg'
import {ChevronRight as ArrowIcon} from 'react-feather'
import T from 'languages'
import {mediaQueries} from 'constants/mediaQueries'

const Wrap = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 56px;
  margin-bottom: 40px;
  width: 472px;
  max-width: 100%;
  height: 600px;
  background: url(${({img}) => img || workCover}) no-repeat #ccc;
  background-size: cover;
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
    line-height: 40px;
    color: #fff;
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
  @media ${mediaQueries.tabletL}{
    padding: 35px;
    height: 60vw;
    h4{
      font-size: 33px;
      line-height: 38px;
    }
  }
  @media ${mediaQueries.tabletM}{
    padding: 25px;
    h4{
      font-size: 28px;
      line-height: 32px;
    }
    h3{
      font-size: 20px;
      line-height: 26px;
    }
    p{
      font-size: 20px;
      line-height: 26px;
    }
  }
  @media ${mediaQueries.tabletS}{
    height: 112vw;
    padding: 45px;
    width: 100vw;
    h4{
      font-size: 40px;
      line-height: 48px;
    }
    h3{
      font-size: 20px;
      line-height: 43px;
    }
    p{
      font-size: 18px;
      line-height: 40px;
    }
  }
  @media ${mediaQueries.mobileEL}{
    padding: 30px;
    h4{
      font-size: 33px;
      line-height: 38px;
    }
  }
  @media ${mediaQueries.mobileM}{
    padding: 25px;
    h4{
      font-size: 28px;
      line-height: 32px;
    }
    h3{
      font-size: 20px;
      line-height: 26px;
    }
    p{
      font-size: 20px;
      line-height: 26px;
    }
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
