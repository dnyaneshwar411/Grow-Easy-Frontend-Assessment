import { propeties } from "@/utils/data";
import BannerPropertyEditOptions from '@/components/BannerPropertyEditOptions';
import ChangeBackgroundImage from "./EditChangeBackgroundImage";
import { Dispatch, SetStateAction } from "react";
import { ElementImageType, ElementTextType, ElementType } from "@/utils/types";
import { getConfigProperty } from "@/utils/helpers";

export default function EditOptions({ config, onSetConfig }: { config: ElementType, onSetConfig: Dispatch<SetStateAction<ElementType>> }) {
  const changeConfig = (property: string, value: ElementTextType | ElementImageType) => onSetConfig(prev => ({ ...prev, [property]: value }));
  const changeBackground = (val: string) => onSetConfig(prev => ({ ...prev, background: val }))
  return <>
    {propeties.map(property => <BannerPropertyEditOptions
      key={property.key}
      property={getConfigProperty(config, property.title as keyof ElementType)}
      displayTitle={property.displayTitle}
      iterables={property.iterables}
      isContent={property.isContent}
      onChangeConfig={changeConfig}
      porpertyTitle={property.title}
    />)}
    <ChangeBackgroundImage background={config.background} onChangeBackground={changeBackground} />
  </>
}