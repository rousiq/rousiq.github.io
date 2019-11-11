import React from 'react'
import ReactDOM from 'react-dom'
import {from} from 'rxjs'
import * as serviceWorker from './serviceWorker'
import {setObservableConfig} from 'recompose'
import App from './App'

// Converts a plain ES observable to an RxJS 6 observable
setObservableConfig({
  fromESObservable: from
})

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
