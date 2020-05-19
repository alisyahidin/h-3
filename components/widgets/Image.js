import { Input } from 'semantic-ui-react'

const Image = ({ name, label, value }) => {
  return <Input className="w-full" name={name} label={label} />
}

export default Image