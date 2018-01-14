export default (value) => {
  let val
  if (value.length > 77) {
    val = value.slice(0, 80) + ' . . .'
  } else {
    val = value
  }
  return val
}
