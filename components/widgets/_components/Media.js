import { useState, useEffect, useCallback } from 'react'
import { Input, Button, Image, Modal } from 'semantic-ui-react'
import clsx from 'clsx'
import axios from '../../../lib/axios'

const Media = ({ open, closeModal, onSelected = null }) => {
  const [images, setImages] = useState([])
  const [selected, setSelected] = useState(null)

  const fetchImages = useCallback(() => {
    axios.get('/api/images')
      .then(({ data }) => setImages(data))
      .catch(console.log)
  }, [])

  const uploadImage = e => {
    const formData = new FormData()
    formData.append('image', e.target.files[0], e.target.files[0].name)

    axios.post('/api/images', formData)
      .then(() => fetchImages())
      .catch(console.log)
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
              <input onChange={uploadImage} className="hidden" name="image" type="file" accept=".jpg,.jpeg,.svg,.png" />
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
        <div className="grid grid-cols-4 scrolling gap-6 mt-6 content">
          {images.map(({ name, url }, index) => (
            <div
              key={index}
              onClick={() => setSelected(selected => selected === url ? null : url)}
              className={clsx([
                selected === index && 'border-blue-500',
                'media-file col-span-1 cursor-pointer border-2 rounded'
              ])}
            >
              <div className="media-file__preview">
                <Image src={url} alt={name} />
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