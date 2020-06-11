export const notFound = res => {
  res.statusCode = 404
  res.json({ message: 'Not found!' })
  res.end()
}
export const invalidCollection = (res, entryName) => {
  res.statusCode = 404
  res.json({ message: `There is no ${entryName} collections!` })
  res.end()
}

export const success = res => {
  res.statusCode = 201
  res.json({ message: 'Successfully saved!' })
  res.end()
}

export const error = res => {
  res.statusCode = 500
  res.json({ message: 'Something went wrong, please try again later :)' })
  res.end()
}