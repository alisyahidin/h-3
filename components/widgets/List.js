import { useEffect } from 'react'
import { Icon } from 'semantic-ui-react'
import Widget from './index'
import { Outer, Inner } from './_components/Wrapper'

const List = ({ label, name, value, onChange, fields }) => {
  const handleChange = index => (key, widgetValue) => {
    value[index] = {
      ...value[index],
      [key]: widgetValue
    }
    onChange(value)
  }
  const addItem = () => {
    value.push({ collapsed: true })
    onChange(value)
  }
  const collapseItem = index => {
    value[index].collapsed = value[index].collapsed ? false : true
    onChange(value)
  }
  const deleteItem = index => {
    value.splice(index, 1)
    onChange(value)
  }

  useEffect(() => {
    value === '' && onChange([])
    if (value !== '') {
      value?.map(val => val.collapsed = val.collapsed ?? true)
      onChange(value)
    }
  }, [])

  return (
    <Outer
      title={`${value?.length} ${name}s`}
      action={
        <button
          onClick={addItem}
          className="block bg-blue-300 py-1 px-2 rounded"
        >
          <Icon name="plus" /> Add {label}
        </button>
      }
    >
      {value !== '' && value.map(({ collapsed, ...itemValue }, index) =>
        <Inner
          key={index}
          collapsed={collapsed}
          collapseItem={() => collapseItem(index)}
          action={<button onClick={() => deleteItem(index)}><Icon name="delete" /></button>}
        >
          {fields.map((fieldWidget, fieldIndex) => (
            <Widget key={fieldIndex} onChange={handleChange(index)} value={itemValue?.[fieldWidget.name] ?? ''} {...fieldWidget} />
          ))}
        </Inner>
      )}
    </Outer>
  )
}

export default List