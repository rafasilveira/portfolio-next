import Link from 'next/link'
import React from 'react'

const Breadcrumb: React.FC<{
  items: { href: string; label: string }[]
}> = ({ items = [] }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map(({ href, label }, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${
              index === items.length - 1 ? 'active' : ''
            }`}
          >
            {index !== items.length - 1 ? (
              <Link href={href}>
                <a>{label}</a>
              </Link>
            ) : (
              label
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
