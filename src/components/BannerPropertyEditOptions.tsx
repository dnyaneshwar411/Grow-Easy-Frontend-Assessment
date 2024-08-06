import { StyleKeys } from "@/utils/types";
import EditFormControl from "./EditFormControl";
import { ChangeEvent } from "react";

import EditSelectOptions from "./EditSelectOptions";

export default function ElementPropertyEditOptions({ property, displayTitle, iterables, isContent, onChangeConfig, porpertyTitle }: { property: any, displayTitle: string, iterables: StyleKeys[], isContent: boolean, onChangeConfig: (property: string, value: any) => void, porpertyTitle: string }) {
  function onValueChange(e: ChangeEvent<HTMLInputElement>) {
    const newProperty = { ...property, styles: { ...property.styles, [e.target.name]: e.target.value } }
    onChangeConfig(porpertyTitle, newProperty)
  }

  const onMetaDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newProperty = { ...property, [e.target.name]: e.target.value }
    onChangeConfig(porpertyTitle, newProperty)
  }

  const changeButtonClass = (e: ChangeEvent<HTMLSelectElement>) => {
    const newProperty = {
      ...property, styles: { ...property.styles, class: e.target.value }
    }
    onChangeConfig(porpertyTitle, newProperty)
  }

  return <div className="mb-12">
    <h1 className="text-[var(--color-3)] text-[32px] font-semibold">{displayTitle}</h1>
    <div className="max-w-[800px] flex items-center flex-wrap gap-4">
      {isContent
        ? <EditFormControl
          title="Content"
          name="content"
          value={property.content}
          onChange={onMetaDataChange}
        />
        : <EditFormControl
          title="Image Source"
          name="src"
          value={property.src}
          onChange={onMetaDataChange}
        />}
      {iterables.map((iterable, idx) => <EditFormControl
        key={idx}
        title={iterable}
        name={iterable}
        value={property.styles[iterable]}
        onChange={onValueChange}
      />)}
      {porpertyTitle === "cta" && <EditSelectOptions onChangeButtonClass={changeButtonClass} />}
    </div>
  </div>
}