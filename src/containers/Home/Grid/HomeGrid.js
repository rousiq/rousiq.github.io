import React from 'react'
import Layout from 'layouts'
import Container from 'components/Container'
import Header from 'containers/Home/Grid/Sections/Header'
import Cover from 'containers/Home/Grid/Sections/Cover'
import Footer from 'containers/Home/Grid/Sections/Footer'
import Works from 'containers/Home/Grid/Sections/Works'

const HomeGrid = (props) => {
  const {
    useHandlers,
    ...restProps
  } = props

  return (
    <Layout>
      <Header
        useHandlers={useHandlers}
        {...restProps}
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
