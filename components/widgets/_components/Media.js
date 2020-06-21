import { useState, useEffect, useCallback } from 'react'
import { Input, Button, Image, Modal } from 'semantic-ui-react'
import clsx from 'clsx'
import axios from 'lib/axios'
import Video from 'components/Video'

const imageExtension = [
  '.jpg',
  '.jpeg',
  '.svg',
  '.png'
]

const Media = ({ open, closeModal, onSelected = null, accept = '.jpg,.jpeg,.svg,.png' }) => {
  const [images, setImages] = useState([])
  const [selected, setSelected] = useState(null)

  const fetchImages = useCallback(() => {
    axios.get('/api/images')
      .then(data => setImages(
        data
          .filter(file => accept.split(',').includes('.' + file.name.split('.').pop()))
      ))
      .catch(console.log)
  }, [])

  const uploadImage = e => {
    const formData = new FormData()
    formData.append('image', e.target.files[0], e.target.files[0].name)

    axios.post('/api/images', formData)
      .then(() => fetchImages())
      .catch(() => fetchImages())
  }

  useEffect(() => {
    fetchImages()
  }, [fetchImages])

  const close = () => {
    setSelected(null)
    closeModal()
  }

  const selectImage = () => {
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
            <label className="ui small button">
              <span>Upload</span>
              <input onChange={uploadImage} className="hidden" name="image" type="file" accept={accept} />
            </label>
          </div>
        </div>
      </Modal.Header>
      <Modal.Content>
        <div className="flex justify-between items-center">
          <Input icon='search' placeholder='Search...' />
          <div>
            <Button icon="trash alternate outline" disabled={selected === null} size="small" negative content="Delete Selected" />
            {onSelected !== null && <Button onClick={selectImage} icon="check" disabled={selected === null} size="small" positive content="Choose Selected" />}
          </div>
        </div>
        <div className={clsx(["grid scrolling gap-6 mt-6 content", images.length > 0 ? 'grid-cols-4' : 'grid-cols-1'])}>
          {images.length === 0 && <div className="w-full py-20">
            <h2 className="text-gray-600 text-center">No file uploaded</h2>
          </div>}
          {images.map(({ name, url }, index) => (
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