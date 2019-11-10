import React from 'react'
import T from 'languages'
import useLocalStorage from 'react-use-localstorage'

const HomeContainer = () => {
  const [lang, setLang] = useLocalStorage('language', '')
  const [theme, setTheme] = useLocalStorage('theme', '')

  const handleSetLang = () => {
    setLang(lang === '"en"' ? '"ru"' : '"en"')
    setTheme(theme === '"dark"' ? '"light"' : '"dark"')
  }

  return (
    <>
      <p><T>Привет мир</T></p>
      <button type={'button'} onClick={handleSetLang}><T>English</T></button>
    </>
  )
}

export default HomeContainer
