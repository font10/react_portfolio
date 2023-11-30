const validation = (schema) => async(req, res, next) => {
  const { body } = req

  try {
    await schema.validate(body)
    return next()
  } catch (err) {
    return res.status(400).json({ status: 'FAIL', message: err.message })
  }
}


export default validation