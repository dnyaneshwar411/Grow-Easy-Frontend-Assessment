import useBannerContext from "@/utils/BannerContext";
import { ElementType } from '@/utils/types';
import { useState } from "react";
import Banner from "./Banner";
import { X } from "lucide-react";
import EditOptions from "./EditOptions";

export default function EditElement({ selectedBanner }: { selectedBanner: ElementType }) {
  const { onEditBanner, onChangeBanner } = useBannerContext();
  const [config, setConfig] = useState<ElementType>(selectedBanner);

  return <div className="bg-[#0000007d] h-screen fixed w-screen top-0 left-0 flex items-center justify-center animate-fadeIn z-[100]">
    <div className="h-screen lg:h-auto overflow-y-scroll lg:overflow-y-hidden lg:flex items-stretch relative">
      <X
        className="text-[#808080] absolute right-10 top-10 cursor-pointer hover:text-[var(--color-5)] z-10"
        onClick={() => onEditBanner(undefined)}
      />
      <div className="px-4 lg:px-20 flex items-center justify-center bg-[var(--color-1)] pt-20 lg:pt-10">
        <Banner elementConfig={config} />
      </div>
      <div className="lg:h-[80vh] bg-[var(--color-1)] p-8 overflow-y-hidden lg:overflow-y-scroll relative">
        <div className="italic text-[var(--color-4)] opacity-80 mb-10">
          * mention the styles with correct units like - font size with unit px, rem, em, etc.
        </div>

        <EditOptions config={config} onSetConfig={setConfig} />
        <button
          className="save-btn"
          onClick={() => onChangeBanner(selectedBanner.key, config)}
        >Update</button>
      </div>
    </div>
  </div>
};