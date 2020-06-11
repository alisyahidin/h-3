import { useEffect } from 'react'
import DatePicker from 'react-datepicker'

const DateWidget = ({ id, value, onChange }) => {
  useEffect(() => {
    value === '' && onChange((new Date()).toISOString())
  }, [])

  return (
    <div className="w-full border-gray-300 border-2 p-3 flex justify-between">
      <DatePicker
        id={id}
        selected={value !== '' ? new Date(value) : null}
        onChange={date => onChange(date.toISOString())}
        showTimeSelect
        timeFormat="HH:mm"
        timeCaption="time"
        timeIntervals={1}
        dateFormat="d MMMM yyyy - h:mm aa"
      />
      <button
        onClick={() => onChange((new Date()).toISOString())}
        className="bg-blue-200 py-1 px-2 rounded"
      >
        Now
      </button>
    </div>
  )
}

export default DateWidget