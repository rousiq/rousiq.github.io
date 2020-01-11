import {curry, filter, fromPairs, head, isEmpty, join, map, mergeRight, not, pipe, split, toPairs} from 'ramda'

const getPathnameFromUrl = pipe(
  split('?'),
  head
)

export const parseParams = url => {
  const [, search] = split('?', url)
  const searchToObject = pipe(
    split('&'),
    map(split('=')),
    fromPairs
  )
  return search ? searchToObject(search) : {}
}

export const paramsToSearch = pipe(
  toPairs,
  map(join('=')),
  join('&')
)

export const appendParamsToUrl = curry((appendParams, url) => {
  const pathname = getPathnameFromUrl(url)
  const params = parseParams(url)
  const newParams = pipe(
    mergeRight(params),
    filter(
      pipe(
        isEmpty,
        not
      )
    )
  )(appendParams)
  return pathname + '?' + paramsToSearch(newParams)
})
