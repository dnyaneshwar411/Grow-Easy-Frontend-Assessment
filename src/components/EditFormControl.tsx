import { ChangeEventHandler } from "react";

interface FormControlType {
  title: string,
  name: string,
  value: string | number,
  unit?: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function FormControl({ title, name, value, unit, onChange }: FormControlType) {
  return <div className="w-fit">
    <label htmlFor={name}>{title}</label>
    <br />
    <input
      name={name}
      type="text"
      value={String(value)}
      className="w-32 mt-2"
      onChange={onChange}
    />
    {unit && <span>please enter the value in {unit}</span>}
  </div>
}