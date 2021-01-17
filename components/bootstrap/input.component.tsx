import classNames from 'classnames'
import React, { InputHTMLAttributes } from 'react'
import slugify from 'slugify'
import VMasker from 'vanilla-masker'
interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  floating?: boolean
  wrapperClassName?: string
  inputClassName?: string
  labelClassName?: string
  label?: React.ReactNode
  rows?: number
  mask?: string
  error?: string
  hint?: React.ReactNode
}

const Input: React.FC<InputProps> = ({
  floating = false,
  name,
  wrapperClassName,
  inputClassName,
  labelClassName,
  type = 'text',
  placeholder,
  label,
  onChange,
  rows,
  mask,
  defaultValue,
  value,
  hint,
  error,
  ...props
}) => {
  const _onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void = ev => {
    if (mask) {
      if (mask === 'slugify') {
        ev.target.value = slugify(ev.target.value.replaceAll(' ', '-'), {
          lower: true,
          strict: true
        })
      } else {
        ev.target.value = VMasker.toPattern(ev.target.value, mask)
      }
    }
    onChange && onChange(ev)
  }
  return (
    <div
      className={classNames({ 'form-floating': floating }, wrapperClassName)}
    >
      {label && !floating && (
        <label htmlFor={name} className={`form-label ${labelClassName}`}>
          {label}
        </label>
      )}
      {!rows && (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={
            placeholder || (typeof label === 'string' && label) || ''
          }
          className={classNames('form-control', inputClassName, {
            'is-invalid': error
          })}
          onChange={_onChange}
          defaultValue={defaultValue}
          value={value}
          {...props}
        />
      )}
      {rows && (
        <textarea
          name={name}
          id={name}
          placeholder={
            placeholder || (typeof label === 'string' && label) || ''
          }
          className={classNames('form-control', inputClassName, {
            'is-invalid': error
          })}
          onChange={onChange}
          defaultValue={defaultValue}
          value={value}
          style={{ height: rows * 18 }}
          {...props}
        />
      )}
      {label && floating && (
        <label htmlFor={name} className={`form-label ${labelClassName}`}>
          {label}
        </label>
      )}
      {error && <div className="invalid-feedback">{error}</div>}
      {hint && <div className="form-text">{hint}</div>}
    </div>
  )
}

export default Input
