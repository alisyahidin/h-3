import { useState, useEffect, useCallback } from 'react'
import { Input, Button, Image, Modal, Progress } from 'semantic-ui-react'
import clsx from 'clsx'
import axios from 'lib/axios'
import Video from 'components/Video'
import { formatBytes } from 'utils/helper'

const imageExtension = [
  '.jpg',
  '.jpeg',
  '.svg',
  '.png'
]

const Media = ({ open, closeModal, onSelected = null, accept = '.jpg,.jpeg,.svg,.png' }) => {
  const [files, setFiles] = useState([])
  const [progress, setProgress] = React.useState({ percent: 0, size: 0, total: 0 })
  const [uploading, setUploading] = useState(false)
  const [selected, setSelected] = useState(null)
  const [currentRequest, setCurrentRequest] = useState(null)

  const fetchFiles = useCallback(() => {
    axios.get('/api/files')
      .then(data => setFiles(
        data
          .filter(file => accept.split(',').includes('.' + file.name.split('.').pop()))
      ))
      .catch(console.log)
  }, [])

  const sendRequest = file => {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest()

      req.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          const percent = Math.round(event.loaded / event.total * 100)
          setProgress({ percent, size: event.loaded, total: event.total })
        }
      })

      req.upload.addEventListener("load", event => {
        resolve('Sucess upload file')
      })

      req.upload.addEventListener("error", event => {
        reject('There is an error uploading file')
      })

      const formData = new FormData()
      formData.append("file", file, file.name)

      req.open('POST', process.env.NEXT_PUBLIC_SITE_URI + '/api/files')
      req.send(formData)

      setCurrentRequest(req)
    })
  }

  const uploadFile = e => {
    setProgress({ percent: 0, size: 0, total: 0 })
    setUploading(true)
    sendRequest(e.target.files[0])
      .then(() => {
        setCurrentRequest(null)
        setTimeout(() => {
          setUploading(false)
          fetchFiles()
        }, 1500)
      })
      .catch(error => {
        setCurrentRequest(null)
        setTimeout(() => {
          setUploading(false)
          fetchFiles()
        }, 1500)
      })
  }

  const cancelUpload = () => {
    currentRequest && currentRequest.abort()
    setProgress({ percent: 0, size: 0, total: 0 })
    setUploading(false)
  }

  useEffect(() => {
    fetchFiles()
  }, [fetchFiles])

  const close = () => {
    setSelected(null)
    closeModal()
  }

  const selectFile = () => {
    onSelected(selected)
    close()
  }

  return (
    <Modal dimmer="blurring" size="large" open={open} onClose={close}>
      <Modal.Header>
        <div className="flex justify-between items-center">
          Media Assets
          <div>
            <Button className="mr-6" disabled={selected === null} size="small">Download</Button>
            {!uploading && <label className="ui small button">
              <span>Upload</span>
              <input onChange={uploadFile} className="hidden" name="image" type="file" accept={accept} />
            </label>}
            {uploading && <Button onClick={cancelUpload} color="red" className="mr-6" size="small">Cancel Upload</Button>}
          </div>
        </div>
      </Modal.Header>
      <Modal.Content style={{ position: 'relative' }}>
        {uploading && <div className="w-full h-full absolute top-0 left-0 bg-white flex items-center justify-center flex-col px-32 z-20">
          <Progress style={{ width: '100%', margin: 0 }} percent={progress.percent} indicating progress>
            Uploading {formatBytes(progress.size)} / {formatBytes(progress.total)}
          </Progress>
        </div>}
        <div className="flex justify-between items-center">
          <Input icon='search' placeholder='Search...' />
          <div>
            <Button icon="trash alternate outline" disabled={selected === null} size="small" negative content="Delete Selected" />
            {onSelected !== null && <Button onClick={selectFile} icon="check" disabled={selected === null} size="small" positive content="Choose Selected" />}
          </div>
        </div>
        <div className={clsx(["grid scrolling gap-6 mt-6 content", files.length > 0 ? 'grid-cols-4' : 'grid-cols-1'])}>
          {files.length === 0 && <div className="w-full py-20">
            <h2 className="text-gray-600 text-center">No file uploaded</h2>
          </div>}
          {files.map(({ name, url }, index) => (
            <div
              key={index}
              onClick={() => setSelected(selected => selected === url ? null : url)}
              className={clsx([
                selected === url && 'border-blue-500',
                'media-file col-span-1 cursor-pointer border-2 rounded'
              ])}
            >
              <div className="media-file__preview">
                {imageExtension.includes('.' + name.split('.').pop()) ? <Image src={url} alt={name} /> : <Video src={url} />}
              </div>
              <p className="p-4 text-lg text-center text-gray-600 border-t">{name}</p>
            </div>
          ))}
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default Media