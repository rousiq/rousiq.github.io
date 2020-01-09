import Layout from 'layouts'
import * as ROUTES from 'constants/routes'
import HomeContainer from 'containers/Home/HomeContainer'

export default [
  // Home
  {
    path: ROUTES.HOME_PATH,
    layout: Layout,
    component: HomeContainer
  }
]
