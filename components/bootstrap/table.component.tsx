import React, { useMemo } from 'react'
import styled from 'styled-components'
import Pagination, { PaginationProps } from './pagination.component'

export interface TableHeadingsInterface {
  [key: string]: React.ReactNode
}

export interface TableContentsInterface {
  [key: string]: React.ReactNode
}

const TableStyled = styled.table`
  img {
    object-fit: cover;
  }
`

const Table: React.FC<{
  headings: TableHeadingsInterface
  contents: TableContentsInterface[]
  loading?: boolean
  pagination?: PaginationProps
  error?: boolean
  onRetry?: () => void
}> = ({ headings, contents, loading, error, onRetry, pagination }) => {
  const keys = useMemo(() => Object.keys(headings), [headings])
  return (
    <>
      <TableStyled className="table table-hover">
        <thead>
          <tr>
            {keys.map(key => (
              <th key={key}>{headings[key]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!error && !loading && !contents.length && (
            <tr className="text-center py-5">
              <td colSpan={keys.length}>
                Não há registros para serem mostrados
                {onRetry && (
                  <a
                    href="#"
                    className="btn btn-primary mt-2"
                    onClick={onRetry}
                  >
                    Tente novamente
                  </a>
                )}
              </td>
            </tr>
          )}
          {error && (
            <tr className="text-center py-5">
              <td colSpan={keys.length}>
                Não foi possível carregar essa informação.
                {onRetry && (
                  <a
                    href="#"
                    className="btn btn-primary mt-2"
                    onClick={onRetry}
                  >
                    Tente novamente
                  </a>
                )}
              </td>
            </tr>
          )}
          {!loading && !error
            ? contents.map((row, index) => (
                <tr key={index}>
                  {keys.map(key => (
                    <td key={key}>{row[key]}</td>
                  ))}
                </tr>
              ))
            : !error && (
                <>
                  <tr>
                    {keys.map(key => (
                      <td key={key}>...</td>
                    ))}
                  </tr>
                  <tr>
                    {keys.map(key => (
                      <td key={key}>...</td>
                    ))}
                  </tr>
                </>
              )}
        </tbody>
      </TableStyled>
      <Pagination {...pagination}></Pagination>
    </>
  )
}

export default Table
