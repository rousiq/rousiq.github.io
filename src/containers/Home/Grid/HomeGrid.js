import React from 'react'
import Layout from 'layouts'
import Container from 'components/Container'
import Header from 'containers/Home/Grid/Sections/Header'
import Cover from 'containers/Home/Grid/Sections/Cover'
import Footer from 'containers/Home/Grid/Sections/Footer'
import Works from 'containers/Home/Grid/Sections/Works'

const HomeGrid = (props) => {
  const {
    language,
    theme,
    setLanguage,
    setTheme
  } = props

  return (
    <Layout>
      <Header
        language={language}
        theme={theme}
        setLanguage={setLanguage}
        setTheme={setTheme}
      />
      <Container>
        <Cover />
        <Works />
        <Footer />
      </Container>
    </Layout>
  )
}

export default HomeGrid
