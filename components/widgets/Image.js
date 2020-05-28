import { useState, useEffect } from 'react'
import useMedia from '../../hooks/useMedia'

const Image = ({ name, value, onChange }) => {
  const { open, Component: Media } = useMedia()
  const filled = Boolean(value)

  return (<>
    <div className="w-full border-gray-300 border-2 p-3">
      {filled && (<>
        <img className="h-32" src={value} alt={name} />
        <button onClick={open} className="block bg-green-200 mt-2 py-1 px-2 rounded">Choose Different Image</button>
        <button onClick={() => onChange(null)} className="block bg-red-200 mt-2 py-1 px-2 rounded">Delete Image</button>
      </>)}
      {!filled && <button onClick={open} className="bg-blue-200 py-1 px-2 rounded">Choose Image</button>}
    </div>
    <Media onSelected={onChange} />
  </>)
}

export default Image