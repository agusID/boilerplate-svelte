/**
 * @param {String} cookieName
 * @param {String} cookieValue
 * @param {Number} expDays
 * @return {Void}
 */
const setCookie = (cookieName, cookieValue, expDays = 1) => {
  const date = new Date()
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000)
  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${cookieName}=${cookieValue};${expires};path=/`
}

/**
 * @param {String} cookieName
 * @return {String}
 */
const getCookie = cookieName => {
  const name = `${cookieName}=`
  const decodedCookie = decodeURIComponent(document.cookie)
  const cookieSplit = decodedCookie.split(';')
  const mapCookies = cookieSplit
    .filter(cookie => cookie.includes(name))
    .map(cookie => cookie.substring(name.length + 1, cookie.length))
  return mapCookies.length > 0 ? mapCookies[0] : ''
}

/**
 * @param {String} cookieName
 * @return {Void}
 */
const destroyCookie = cookieName => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

export { setCookie, getCookie, destroyCookie }
