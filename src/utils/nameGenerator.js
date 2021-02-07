module.exports = (originalName) => {
  let array_name = originalName.split('.')
  let name = array_name[0]
  let extension = array_name.pop()
  return (name + Date.now() + '.' + extension).replace(/:/g, '-')
}
