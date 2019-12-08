import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  width: 100%;
  min-height: 100vh;
`

const Layout = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Layout
