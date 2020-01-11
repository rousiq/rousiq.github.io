import {useHistory} from 'react-router-dom'
import {sprintf} from 'sprintf-js'
import {is} from 'ramda'

const useRedirect = redirectUrl => {
  const history = useHistory()

  return id => {
    if (is(Number, id)) {
      history.push(sprintf(redirectUrl, id))
    } else if (is(Array, id)) {
      history.push(sprintf(redirectUrl, ...id))
    } else {
      history.push(redirectUrl)
    }
  }
}

export default useRedirect
