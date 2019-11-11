import React from 'react'
import styled, {keyframes} from 'styled-components'
import {Moon as MoonIcon, Sun as SunIcon} from 'react-feather'
import T from 'languages'
import {storageData} from 'helpers/storage'

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const Wrap = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 40px;
`
const Logo = styled('a')`
  color: ${({theme}) => theme.color.primary};
  font-size: 20px;
  font-weight: 600;
  transition: ${({theme}) => theme.transition.primary};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  span{
    display: block;
    margin: 0 10px 0 0;
    &:first-child{
      animation: ${animation} 10s ease-in-out 3s infinite;
    }
    &:nth-child(2){
      animation: ${animation} 10s ease-in-out 6s infinite;
    }
    &:last-child{
      animation: ${animation} 10s ease-in-out 9s infinite;
    }
  }
  &:hover{
    color: ${({theme}) => theme.color.linkHover};
    transition: ${({theme}) => theme.transition.primary};
  }
`
const Email = styled('a')`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme}) => theme.color.link};
  margin-right: 15px !important;
  transition: ${({theme}) => theme.transition.primary};
  &:hover{
    color: ${({theme}) => theme.color.linkHover};
    transition: ${({theme}) => theme.transition.primary};
  }
`
const RightBar = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 5px;
  }
`
const Button = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 38px;
  border-radius: 4px;
  font-size: 16px;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0,0,0,.1);
  color: ${({theme}) => theme.color.minor};
  background: #fff;
  font-weight: 700;
  transition: ${({theme}) => theme.transition.primary};
  svg{
    max-width: 20px;
    max-height: 20px;
    color: ${({theme}) => theme.color.minor};
    fill: ${({theme}) => theme.color.minor};
    transition: ${({theme}) => theme.transition.primary};
  }
  &:hover{
    color: ${({theme}) => theme.color.linkHover};
    transition: ${({theme}) => theme.transition.primary};
    svg{
      color: ${({theme}) => theme.color.linkHover};
      fill: ${({theme}) => theme.color.linkHover};
      transition: ${({theme}) => theme.transition.primary};
    }
  }
`

const Header = (props) => {
  const {
    language,
    theme,
    setLanguage,
    setTheme
  } = props

  const handleSetLang = () => {
    const i = language === 'ru' ? 'en' : 'ru'
    setLanguage(i)
    storageData('language').setValue(i)
  }
  const handleSetTheme = () => {
    const i = theme === 'light' ? 'dark' : 'light'
    setTheme(i)
    storageData('theme').setValue(i)
  }
  const themeIcon = theme === 'dark' ? <SunIcon /> : <MoonIcon />

  return (
    <Wrap>
      <Logo>
        <span>R</span>
        <span>O</span>
        <span>U</span>
      </Logo>
      <RightBar>
        <Email href={'mailto:mrousia@gmail.com'}>mrousia@gmail.com</Email>
        <Button onClick={handleSetTheme}>{themeIcon}</Button>
        <Button onClick={handleSetLang}><T>En</T></Button>
      </RightBar>
    </Wrap>
  )
}

export default Header
