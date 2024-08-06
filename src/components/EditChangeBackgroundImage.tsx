import { backgrounds } from "@/utils/data"
import EditFormControl from "./EditFormControl"
import Image from "next/image"

export default function ChangeBackgroundImage({ background, onChangeBackground }: {
  background: string,
  onChangeBackground: (val: string) => void
}) {
  return <div className="mb-12 flex items-end gap-4">
    <EditFormControl
      title="Background Color"
      name="background"
      value={background}
      onChange={(e) => onChangeBackground(e.target.value)}
    />
    {backgrounds.map(bg => <Image
      height={100}
      width={100}
      alt="This is banner image"
      onClick={() => onChangeBackground(bg)}
      key={bg}
      src={bg}
      className="w-20 h-20 object-contain inline cursor-pointer"
    />)}
  </div>
}