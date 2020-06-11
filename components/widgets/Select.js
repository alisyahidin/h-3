import { Select as SelectUi } from 'semantic-ui-react'

const Select = ({ name, value, onChange, options }) => {
  const selectOptions = options.map((opt, index) => ({ key: index, value: opt, text: opt }))

  return <SelectUi
    placeholder={`Select ${name}`}
    className="w-full"
    options={selectOptions}
    onChange={(_, data) => onChange(data.value)}
    value={value}
  />
}

export default Select