import classNames from 'classnames'
import React from 'react'

const Spinner = ({ className = '' }) => {
  return (
    <div
      className={classNames('spinner-border spinner-border-sm', className)}
      role="status"
    >
      <span className="visually-hidden">Carregando...</span>
    </div>
  )
}

export default Spinner
