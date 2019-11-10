export const storageData = key => ({
  setValue: value => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  getValue: () => {
    const value = localStorage.getItem(key)
    return JSON.parse(value)
  }
})
