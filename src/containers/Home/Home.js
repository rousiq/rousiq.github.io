import React from 'react'
import Layout from 'layouts'
import Header from 'containers/Home/Sections/Header'
import Cover from 'containers/Home/Sections/Cover'
import Container from 'components/Container'

const Home = () => {
  return (
    <Layout>
      <Header />
      <Container>
        <Cover />
      </Container>
    </Layout>
  )
}

export default Home
