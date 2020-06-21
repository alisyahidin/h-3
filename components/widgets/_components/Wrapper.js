import { useState } from 'react'
import { Icon } from 'semantic-ui-react'

export const Outer = ({ children, collapse = false, title = null, action = null }) => {
  const [collapsed, setCollapsed] = useState(true)

  return (<>
    <div className="flex justify-between items-center bg-gray-300 p-3">
      <div className="flex">
        {collapse && <button onClick={() => setCollapsed(!collapsed)}>
          <Icon name={`angle ${collapsed ? 'down' : 'right'}`} />
        </button>}
        {title && <p className="m-0">{title}</p>}
      </div>
      {action && action}
    </div>
    <div style={{ height: collapsed ? 'initial' : 0, overflow: collapsed ? 'none' : 'hidden' }} className="w-full border-gray-300 border-2 p-3 pt-0">
      {children}
    </div>
  </>)
}

export const Inner = ({ children, action = null, collapsed, collapseItem }) => {
  return (<>
    <div className="flex justify-between items-center bg-gray-300 py-1 px-2 mt-3">
      <button onClick={collapseItem}>
        <Icon name={`angle ${collapsed ? 'down' : 'right'}`} />
      </button>
      {action && action}
    </div>
    <div style={{ height: collapsed ? 'initial' : 0, overflow: collapsed ? 'none' : 'hidden' }} className="w-full border-gray-300 border-2 p-3 pt-0">
      {children}
    </div>
  </>)
}