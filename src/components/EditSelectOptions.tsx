import { ChangeEvent } from "react";

export default function SelectOptions({ onChangeButtonClass }: { onChangeButtonClass: (e: ChangeEvent<HTMLSelectElement>) => void }) {
  return <div className="mt-auto flex items-end">
    <div>
      <label>Button Type</label>
      <select className="bg-transparent input mr-4 mt-2 block" onChange={onChangeButtonClass}>
        <option value="btn-1">Button 1</option>
        <option value="btn-2">Button 2</option>
        <option value="btn-3">Button 3</option>
        <option value="btn-4">Button 4</option>
      </select>
    </div>
    <button className="btn-1 mr-4">Button 1</button>
    <button className="btn-2 mr-4">Button 2</button>
    <button className="btn-3 mr-4">Button 3</button>
    <button className="btn-4">Button 4</button>
  </div>
}