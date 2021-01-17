import React from 'react'

const Loading = () => {
  return (
    <div className="text-center p-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Carregando...</span>
      </div>
    </div>
  )
}

export default Loading
