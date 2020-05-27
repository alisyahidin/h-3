const LabelWrap = ({ label, htmlFor, children }) => {
  return (
    <div className="widget mt-5">
      <label
        htmlFor={htmlFor}
        className="inline-block bg-gray-300 text-gray-600 px-3 uppercase font-bold text-sm"
      >
        {label}
      </label>
      {children}
    </div>
  )
}

export default LabelWrap