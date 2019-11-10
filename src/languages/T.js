import LangData from './data/en.json'
import {storageData} from 'helpers/storage'

const T = props => {
  const {children} = props

  const EN = 'en'

  const lang = storageData('language').getValue()

  if (lang === EN && LangData[children]) {
    return LangData[children]
  }
  return children
}

export default T
