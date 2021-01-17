import classNames from 'classnames'
import React, { SelectHTMLAttributes } from 'react'

export interface SelectOption {
  label: string
  value: string | number
}
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode
  error?: string
  floating?: boolean
  hint?: React.ReactNode
  wrapperClassName?: string
  options?: SelectOption[]
}

const Select: React.FC<SelectProps> = ({
  floating = false,
  label = '',
  options = [],
  hint,
  error,
  wrapperClassName = '',
  ...props
}) => {
  return (
    <div
      className={classNames({ 'form-floating': floating }, wrapperClassName)}
    >
      {!floating && label && <label className="form-label">{label}</label>}
      <select
        className={classNames('form-select', {
          'is-invalid': error
        })}
        {...props}
      >
        <option value="">{props.placeholder || 'Selecione'}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {floating && label && <label htmlFor={props.id}>{label}</label>}
      {hint && <div className="form-text">{hint}</div>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default Select
