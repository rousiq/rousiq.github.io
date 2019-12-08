import styled from 'styled-components'
import {mediaQueries} from 'constants/mediaQueries'

export default styled('div')`
  min-height: 100vh;
  width: 1024px;
  margin: 0 auto;
  padding: 0 40px;
  @media ${mediaQueries.tabletL}{
    width: 100%;
    padding: 0 20px;
  }
`
