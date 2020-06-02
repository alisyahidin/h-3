import Label from './_components/Label'
import StringWidget from './String'
import Markdown from './Markdown'
import Image from './Image'
import ObjectWidget from './Object'
import DateWidget from './Date'
import List from './List'

const getWidgetComponent = type => {
  switch (type) {
    case 'string':
    case 'text':
      return StringWidget
    case 'date':
      return DateWidget
    case 'markdown':
      return Markdown
    case 'image':
      return Image
    case 'object':
      return ObjectWidget
    case 'list':
      return List
    default:
      throw new Error(`Invalid widget name for ${type}`)
  }
}

const Widget = ({ widget, name, label, onChange, value, ...props }) => {
  const WidgetComponent = getWidgetComponent(widget)
  const handleChange = value => {
    onChange(name, value)
  }

  return (
    <Label label={label} htmlFor={`${widget}-${name}`}>
      <WidgetComponent {...props} label={label} onChange={handleChange} id={`${widget}-${name}`} name={name} value={value} />
    </Label>
  )
}

export default Widget