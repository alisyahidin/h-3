import { useEffect } from 'react'
import Widget from './index'
import { Outer } from './_components/Wrapper'

const ObjectWidget = ({ label, name, value, onChange, fields }) => {
  const handleChange = (fieldName, fieldValue) => {
    if (typeof value !== 'string') {
      value[fieldName] = fieldValue
      onChange(value)
    }
  }

  useEffect(() => {
    value === '' && onChange({})
  }, [])

  return (
    <Outer collapse>
      {fields.map((fieldWidget, index) => (
        <Widget key={index} onChange={handleChange} value={value?.[fieldWidget.name] ?? ''} {...fieldWidget} />
      ))}
    </Outer>
  )
}

export default ObjectWidget