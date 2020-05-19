import String from './String'

const widget = {
  string: String
}

const Widget = ({ type, name, label, onChange, value }) => {
  const WidgetComponent = widget[type]
  const handleChange = value => {
    onChange(name, value)
  }

  return (
    <div className="widget mt-5">
      <label
        htmlFor={`${type}-${name}`}
        className="inline-block bg-gray-300 text-gray-600 px-3 uppercase font-bold text-sm"
      >
        {label}
      </label>
      <WidgetComponent onChange={handleChange} id={`${type}-${name}`} name={name} value={value} />
    </div>
  )
}

export default Widget