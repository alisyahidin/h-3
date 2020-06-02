const Text = ({ id, name, value, onChange }) => {
  return <textarea
    className="w-full p-4 border-gray-300 border-2"
    style={{ resize: 'none' }}
    rows="3"
    id={id}
    onChange={e => onChange(e.target.value)}
    name={name}
    value={value}
  />
}

export default Text