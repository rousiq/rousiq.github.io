const width = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '414px',
  mobileEL: '500px',
  tabletS: '640px',
  tabletM: '768px',
  tabletL: '980px',
  desktopS: '1024px',
  desktopM: '1366px',
  desktopL: '1920px',
  desktopEL: '2560px'
}

export const mediaQueries = {
  mobileS: `(max-width: ${width.mobileS})`,
  mobileM: `(max-width: ${width.mobileM})`,
  mobileL: `(max-width: ${width.mobileL})`,
  mobileEL: `(max-width: ${width.mobileEL})`,
  tabletS: `(max-width: ${width.tabletS})`,
  tabletM: `(max-width: ${width.tabletM})`,
  tabletL: `(max-width: ${width.tabletL})`,
  desktopS: `(max-width: ${width.desktopS})`,
  desktopM: `(max-width: ${width.desktopM})`,
  desktopL: `(max-width: ${width.desktopL})`,
  desktopEL: `(max-width: ${width.desktopEL})`
}
