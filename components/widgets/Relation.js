import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import mustache from 'mustache'
import axios from 'lib/axios'

const Select = dynamic(() => import('react-select'), { ssr: false })

const Relation = ({ name, value, onChange, collection, labelField }) => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    axios.get(`/api/collection/${collection}`)
      .then(({ entries }) => setEntries(entries))
      .catch(err => {
        console.error(err)
        throw new Error(err)
      })
  }, [])

  const handleChange = selected => {
    const finalValue = entries.find(({name}) => name === selected?.value)
    onChange(finalValue)
  }

  const options = entries.map(({ data, name }) => ({ value: name, label: mustache.render(labelField, data) }))

  return <Select
    name={name}
    isSearchable
    onChange={handleChange}
    value={options.length > 0 ? options.find(({ value: valueOption }) => value?.name === valueOption) : null}
    options={options}
  />
}

export default Relation