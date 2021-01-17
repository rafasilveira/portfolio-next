import React from 'react'

const Heading: React.FC<{
  title: React.ReactNode
  actions?: React.ReactNode
}> = ({ title, actions }) => {
  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
      <h1 className="h2">{title}</h1>
      {actions}
    </div>
  )
}

export default Heading
