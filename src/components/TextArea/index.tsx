import React, { TextareaHTMLAttributes } from 'react'
import * as s from './styles'

export type TextAreaProps = {
  label: string
  labelFor: string
  name?: string
  value?: string
  onTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = ({
  label,
  labelFor,
  name = 'description',
  value,
  onTextArea
}: TextAreaProps) => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTextArea(e)
  }

  return (
    <>
      <s.Label htmlFor={labelFor}>
        {label}
        <span>*</span>
      </s.Label>
      <s.TextArea
        placeholder="Descreva sua transação..."
        onChange={onChange}
        name={name}
        id={labelFor}
        value={value}
      />
    </>
  )
}

export default TextArea
