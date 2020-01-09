import React from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

const MultiRouter = route => {
  return (
    <React.Fragment>
      <Route
        exact
        path={route.path}
        render={props => {
          return (
            <route.layout title={route.title}>
              <route.component {...props} />
            </route.layout>
          )
        }}
      />
      {route.routes.map((route, index) => {
        return (
          <MultiRouter
            key={index}
            {...route}
          />
        )
      })}
    </React.Fragment>
  )
}

MultiRouter.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.any.isRequired,
  layout: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  routes: PropTypes.array
}

MultiRouter.defaultProps = {
  routes: []
}

export default MultiRouter
