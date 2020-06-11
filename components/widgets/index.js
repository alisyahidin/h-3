import Label from './_components/Label'
import StringWidget from './String'
import Text from './Text'
import Markdown from './Markdown'
import Image from './Image'
import Select from './Select'
import ObjectWidget from './Object'
import DateWidget from './Date'
import List from './List'
import Relation from './Relation'

const getWidgetComponent = type => {
  switch (type) {
    case 'string':
      return StringWidget
    case 'text':
      return Text
    case 'select':
      return Select
    case 'relation':
      return Relation
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