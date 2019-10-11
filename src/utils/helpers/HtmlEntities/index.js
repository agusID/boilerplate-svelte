const decodeEntities = (str) => {
  if (str && typeof str === 'string') {
    const element = document.createElement('div')
    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '')
    element.innerHTML = str
    str = element.textContent
    element.textContent = ''
  }
  return str
}

export default decodeEntities
