import styled from 'styled-components'
import {mediaQueries} from 'constants/mediaQueries'

export default styled('div')`
  min-height: 100vh;
  width: 1024px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  @media ${mediaQueries.tabletM}{
    padding: 0 20px;
  }
  @media ${mediaQueries.mobileL}{
    padding: 0 10px;
  }
`
