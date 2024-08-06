import useBannerContext from "@/utils/BannerContext";
import { ElementType } from "@/utils/types";
import { Pencil } from "lucide-react";
import Image from "next/image";

export default function Banner({ elementConfig, editable = false }: { elementConfig: ElementType, editable?: boolean }) {
  const { onEditBanner } = useBannerContext();

  return <div className="bg-cover h-[400px] w-[400px] relative" style={{ backgroundImage: `url("${elementConfig.background || "/no-image.jpg"}")` }}>
    <h1 className={`absolute tex `} style={elementConfig.title.styles}>{elementConfig.title.content}</h1>
    <h3 className="absolute" style={elementConfig.description.styles}>{elementConfig.description.content}</h3>
    <button className={`absolute z-20 ${elementConfig.cta.styles.class}`} style={elementConfig.cta.styles}>{elementConfig.cta.content}</button>
    <Image
      src={elementConfig.image.src || "/no-image.jpg"}
      alt=""
      height={720}
      width={720}
      style={elementConfig.image.styles}
      className="absolute z-10"
    />
    {editable && <Pencil
      onClick={() => onEditBanner(elementConfig.key)}
      className="w-[40px] text-black bg-[var(--color-3)] absolute right-6 top-6 cursor-pointer z-100 object-contain aspect-square rounded-full outline outline-10 outline-offset-[-1px] outline-white"
    />}
  </div>
}