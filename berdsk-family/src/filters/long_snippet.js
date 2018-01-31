export default (value) => {
  let val
  if (value.length > 300) {
    val = value.slice(0, 300) + ' . . .'
  } else {
    val = value
  }
  return val
}
