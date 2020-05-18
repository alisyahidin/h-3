import String from './String'

const widget = {
  string: String
}

const Widget = ({ type, name, label, value }) => {
  const WidgetComponent = widget[type]

  return <WidgetComponent name={name} label={label} value={value} />
}

export default Widget;
