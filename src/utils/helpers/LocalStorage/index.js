/**
 * @param {String} key
 * @param {Any} valueProps
 */
const setLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value))

/**
 * @param {String} key
 */
const getLocalStorage = (key = '') =>
  localStorage.getItem(key) || '{}'

/**
 * @param {String} key
 */
const destroyLocalStorage = key => {
  localStorage.removeItem(key)
}

export { setLocalStorage, destroyLocalStorage, getLocalStorage }
