import { Input } from 'semantic-ui-react'

const String = ({ name, label, value }) => {
  return <Input className="w-full" name={name} label={label} />
}

export default String;