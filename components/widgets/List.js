import { useState, Fragment, useEffect } from 'react'
import { Icon } from 'semantic-ui-react'
import Widget from './index'

const List = ({ label, name, value, onChange, fields }) => {
  const [length, setLength] = useState(value.length)
  const handleChange = index => (key, widgetValue) => {
    value[index] = {
      ...value[index],
      [key]: widgetValue
    }
    onChange(value)
  }
  const deleteItem = index => {
    setLength(length - 1)
    value.splice(index, 1)
    onChange(value)
  }

  useEffect(() => {
    value === '' && onChange([])
  }, [])

  return (<>
    <div className="flex justify-between items-center bg-gray-300 p-3">
      <div className="flex">
        <button><Icon name="angle right" /></button>
        <p className="m-0">{length} {name}s</p>
      </div>
      <button
        onClick={() => setLength(length + 1)}
        className="block bg-blue-300 py-1 px-2 rounded"
      >
        <Icon name="plus" /> Add {label}
      </button>
    </div>
    <div className="w-full border-gray-300 border-2 p-3 pt-0">
      {[...new Array(length)].map((_, index) => <Fragment key={index}>
        <div className="flex justify-between items-center bg-gray-300 py-1 px-2 mt-3">
          <button><Icon name="angle right" /></button>
          <button onClick={() => deleteItem(index)}><Icon name="delete" /></button>
        </div>
        <div className="w-full border-gray-300 border-2 p-3 pt-0">
          {fields.map((fieldWidget, fieldIndex) => (
            <Widget key={fieldIndex} onChange={handleChange(index)} value={value[index]?.[fieldWidget.name] ?? ''} {...fieldWidget} />
          ))}
        </div>
      </Fragment>)}
    </div>
  </>)
}

export default List