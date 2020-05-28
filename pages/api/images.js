import { readdirSync, writeFileSync } from 'fs'
import multer from 'multer'
import connect from 'next-connect'
import session from 'lib/session'

export const config = { api: { bodyParser: false } }

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, { originalname }, cb) => {
    cb(null, originalname)
  }
})
const upload = multer({ storage }).single('image')

export default connect()
  .use(session)
  .get((req, res) => {
    const images = readdirSync('public/images').map(
      filename => ({
        name: filename,
        url: '/images/' + filename
      })
    )
    res.statusCode = 200
    res.json([...images])
  })
  .post((req, res) => {
    upload(req, res, err => {
      if (err) {
        console.log(err)
        res.statusCode = 500
        return res.send({ message: 'Failed upload file' })
      }
      res.statusCode = 201
      res.send({ message: 'Succesfully upload file' })
    })
  })