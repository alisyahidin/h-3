import { useState } from 'react'
import { Input, Button, Image, Modal } from 'semantic-ui-react'
import clsx from 'clsx'

const Media = ({ open, closeModal }) => {
  const [selected, setSelected] = useState(null)
  const close = () => {
    setSelected(null)
    closeModal()
  }

  return (
    <Modal dimmer="blurring" size="large" open={open} onClose={close}>
      <Modal.Header>
        <div className="flex justify-between items-center">
          Media Assets
          <div>
            <Button className="mr-6" disabled={selected === null} size="small">Download</Button>
            <Button size="small">Upload</Button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Content>
        <div className="flex justify-between items-center">
          <Input icon='search' placeholder='Search...' />
          <div>
            <Button icon="trash alternate outline" disabled={selected === null} size="small" negative content="Delete Selected" />
            <Button icon="check" disabled={selected === null} size="small" positive content="Choose Selected" />
          </div>
        </div>
        <div className="grid grid-cols-4 scrolling gap-6 mt-6 content">
          {[...new Array(16)].map((_, index) => (
            <div
              key={index}
              onClick={() => setSelected(selected => selected === index ? null : index)}
              className={clsx([
                selected === index && 'border-blue-500',
                'media-file col-span-1 cursor-pointer border-2 rounded'
              ])}
            >
              <div className="media-file__preview">
                <Image src="/images/sample.jpg" />
              </div>
              <p className="p-4 text-lg text-center text-gray-600 border-t">sample.jpg</p>
            </div>
          ))}
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default Media