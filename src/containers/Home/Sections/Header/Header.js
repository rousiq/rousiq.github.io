import React from 'react'
import styled from 'styled-components'
import useLocalStorage from 'react-use-localstorage'
import {Moon as MoonIcon, Sun as SunIcon} from 'react-feather'
import T from 'languages'

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
  letter-spacing: 10px;
  transition: ${({theme}) => theme.transition.primary};
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
  svg{
    max-width: 20px;
    max-height: 20px;
    color: ${({theme}) => theme.color.minor};
    fill: ${({theme}) => theme.color.minor};
  }
`

const Header = () => {
  const [lang, setLang] = useLocalStorage('language', '')
  const [theme, setTheme] = useLocalStorage('theme', '')

  const handleSetLang = () => {
    setLang(lang === '"en"' ? '"ru"' : '"en"')
  }
  const handleSetTheme = () => {
    setTheme(theme === '"dark"' ? '"light"' : '"dark"')
  }
  const themeIcon = theme === '"dark"' ? <SunIcon /> : <MoonIcon />

  return (
    <Wrap>
      <Logo>ROU</Logo>
      <RightBar>
        <Email>mrousia@gmail.com</Email>
        <Button onClick={handleSetTheme}>{themeIcon}</Button>
        <Button onClick={handleSetLang}><T>En</T></Button>
      </RightBar>
    </Wrap>
  )
}

export default Header
