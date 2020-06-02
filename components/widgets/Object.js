import { useState, Fragment, useEffect } from 'react'
import { Icon } from 'semantic-ui-react'
import Widget from './index'

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
    <div className="w-full border-gray-300 border-2 p-3 pt-0">
      {fields.map((fieldWidget, index) => (
        <Widget key={index} onChange={handleChange} value={value?.[fieldWidget.name] ?? ''} {...fieldWidget} />
      ))}
    </div>
  )
}

export default ObjectWidget