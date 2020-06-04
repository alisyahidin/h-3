import { Select, Input } from 'semantic-ui-react'

const String = ({ name, value, onChange, options }) => {
  const selectOptions = options.map((opt, index) => ({ key: index, value: opt, text: opt }))

  return <Select
    placeholder={`Select ${name}`}
    className="w-full"
    options={selectOptions}
    onChange={(_, data) => onChange(data.value)}
    value={value}
  />
}

export default String