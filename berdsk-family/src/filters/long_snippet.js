export default (value) => {
  let val
  if (value.length > 400) {
    val = value.slice(0, 400) + ' . . .'
  } else {
    val = value
  }
  return val
}
