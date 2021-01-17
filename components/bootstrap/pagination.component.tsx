import classNames from 'classnames'
import React from 'react'
import PaginationResponseInterface from '../../shared/interfaces/pagination-response.interface'

export interface PaginationProps extends PaginationResponseInterface {
  onChange: (page: number) => void
}
const Pagination: React.FC<PaginationProps> = props => {
  const countPages = Math.ceil(props.count / props.perPage)
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li
          className={classNames('page-item', {
            disabled: props.currentPage === 1
          })}
        >
          <button
            className="page-link"
            tabIndex={props.currentPage === 1 ? -1 : 0}
            onClick={() => props.onChange(props.currentPage - 1)}
          >
            &laquo;
          </button>
        </li>
        {props.count > props.perPage && (
          <>
            {new Array(countPages).map((val, key) => {
              const page = key + 1
              return (
                <li className="page-item" key={page}>
                  <button
                    className={classNames('page-link', {
                      disabled: props.currentPage === page
                    })}
                    onClick={() => props.onChange(page)}
                  >
                    {page}
                  </button>
                </li>
              )
            })}
          </>
        )}
        <li
          className={classNames('page-item', {
            disabled: countPages === props.currentPage || !countPages
          })}
        >
          <button
            className={classNames('page-link')}
            onClick={() => props.onChange(props.currentPage + 1)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
