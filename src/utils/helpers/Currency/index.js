/**
 * @param  {String} prefix
 * @param  {Number} num
 * @return {String}
 */
const currency = (prefix, num = 0) => {
  const res = num
    .toString() // to convert a number to string
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  return `${prefix}${res}`
}

export default currency
