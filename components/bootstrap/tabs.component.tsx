import classNames from 'classnames'
import React from 'react'

const Tabs: React.FC<{
  items: {
    title: React.ReactNode
    content?: React.ReactNode
    onClick?: () => void
  }[]
  defaultCurrent?: number
}> = ({ items, defaultCurrent = 0 }) => {
  const [current, setCurrent] = React.useState(defaultCurrent)
  return (
    <>
      <ul className="nav nav-tabs nav-fill mb-2">
        {items.map((item, index) => (
          <li key={index} className="nav-item">
            <a
              onClick={() => {
                item.content && setCurrent(index)
                item.onClick && item.onClick()
              }}
              className={`nav-link ${current === index ? 'active' : ''}`}
              style={{ cursor: item.onClick && 'pointer' }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      {items.map((item, index) => (
        <div
          className={classNames({ 'd-none': index !== current })}
          key={index}
          style={{ width: '100%' }}
        >
          {item.content}
        </div>
      ))}
    </>
  )
}

export default Tabs
