module.exports = getPropTypes

function getPropTypes (obj) {
  let props = []

  for (const prop in obj) {
    props.push(typeof obj[prop])
  }
  return props
}
