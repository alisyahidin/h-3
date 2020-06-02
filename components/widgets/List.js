import { useState, Fragment, useEffect } from 'react'
import { Icon } from 'semantic-ui-react'
import Widget from './index'
import { Outer, Inner } from './_components/Wrapper'

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

  return (
    <Outer
      title={`${length} ${name}s`}
      action={
        <button
          onClick={() => setLength(length + 1)}
          className="block bg-blue-300 py-1 px-2 rounded"
        >
          <Icon name="plus" /> Add {label}
        </button>
      }
    >
      {
        [...new Array(length)].map((_, index) =>
          <Inner key={index} action={<button onClick={() => deleteItem(index)}><Icon name="delete" /></button>}>
            {fields.map((fieldWidget, fieldIndex) => (
              <Widget key={fieldIndex} onChange={handleChange(index)} value={value[index]?.[fieldWidget.name] ?? ''} {...fieldWidget} />
            ))}
          </Inner>
        )
      }
    </Outer>
  )
}

export default List