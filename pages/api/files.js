import { readdirSync, existsSync, unlinkSync } from 'fs'
import multer from 'multer'
import connect from 'next-connect'
import auth from 'middleware/auth'
import { spawn } from 'child_process'

export const config = { api: { bodyParser: false } }

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/files')
  },
  filename: (req, { originalname }, cb) => {
    req.on('aborted', () => {
      unlinkSync(process.cwd() + '/public/files/' + originalname)
    })
    cb(null, originalname)
  }
})
const upload = multer({ storage, limits: 1024 * 1024 * 1024 * 100 }).single('file')

export default connect()
  .get((req, res) => {
    if (!existsSync('public/files')) mkdirSync('public/files')

    const files = readdirSync('public/files').map(
      filename => ({
        name: filename,
        url: '/files/' + filename
      })
    )
    res.statusCode = 200
    res.json([...files])
  })
  .use(auth)
  .post((req, res) => {
    upload(req, res, err => {
      if (err) {
        console.log(err)
        res.statusCode = 500
        return res.send({ message: 'Failed upload file' })
      }
      const restart = spawn('pm2', ['reload', 'app'])
      restart.on('exit', () => {
        setTimeout(() => {
          res.statusCode = 201
          res.send({ message: 'Succesfully upload file' })
        }, 100)
      })
    })
  })