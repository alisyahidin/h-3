import { Input } from 'semantic-ui-react'

const String = ({ id, name, value, onChange }) => {
  return <Input id={id} onChange={e => onChange(e.target.value)} className="w-full" name={name} value={value} />
}

export default String