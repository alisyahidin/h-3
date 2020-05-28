import Label from './_components/Label'
import StringWidget from './String'
import Image from './Image'
import Date from './Date'

const getWidgetComponent = type => {
  switch (type) {
    case 'string':
      return StringWidget
    case 'date':
      return Date
    case 'markdown':
      return StringWidget
    case 'image':
      return Image
    default:
      throw new Error(`Invalid widget name for ${type}`)
  }
}

const Widget = ({ type, name, label, onChange, value }) => {
  const WidgetComponent = getWidgetComponent(type)
  const handleChange = value => {
    onChange(name, value)
  }

  return (
    <Label label={label} htmlFor={`${type}-${name}`}>
      <WidgetComponent onChange={handleChange} id={`${type}-${name}`} name={name} value={value} />
    </Label>
  )
}

export default Widget