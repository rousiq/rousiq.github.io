const width = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '414px',
  tabletS: '640px',
  tabletM: '768px',
  tabletL: '1024px',
  desktopS: '1366px',
  desktopM: '1440px',
  desktopL: '1920px',
  desktopEL: '2560px'
}

export const mediaQueries = {
  mobileS: `(max-width: ${width.mobileS})`,
  mobileM: `(max-width: ${width.mobileM})`,
  mobileL: `(max-width: ${width.mobileL})`,
  tabletS: `(max-width: ${width.tabletS})`,
  tabletM: `(max-width: ${width.tabletM})`,
  tabletL: `(max-width: ${width.tabletL})`,
  desktopS: `(max-width: ${width.desktopS})`,
  desktopM: `(max-width: ${width.desktopM})`,
  desktopL: `(max-width: ${width.desktopL})`,
  desktopEL: `(max-width: ${width.desktopEL})`
}
