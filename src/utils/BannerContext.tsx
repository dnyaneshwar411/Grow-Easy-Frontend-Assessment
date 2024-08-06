import { allBannersElements } from "@/utils/data";
import { BannerConetextTypes, ElementType } from "@/utils/types";
import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

const BannerContext = createContext<BannerConetextTypes>({
  allBanners: [],
  selectedBanner: undefined,
  onEditBanner: () => { },
  selectedBannerKey: undefined,
  onChangeBanner: (val, newBanner) => { }
})

export function BannerProvider({ children }: { children: ReactNode }) {
  const [allBanners, setAllBanners] = useState<ElementType[]>(() => allBannersElements);
  const [selectedBannerKey, setSelectedBanenrKey] = useState<number | undefined>();
  const [selectedBanner, setSelectedBanner] = useState<ElementType | undefined>(undefined);

  const onEditBanner = (val: number | undefined) => {
    setSelectedBanenrKey(val)
    setSelectedBanner(val === undefined ? undefined : allBanners.filter(banner => val === banner.key)[0])
  };

  const onChangeBanner = (val: number | undefined, newBanner: ElementType) => {
    setAllBanners(prev => prev.map(banner => val === banner.key ? newBanner : banner));
    setSelectedBanenrKey(undefined);
    setSelectedBanner(undefined);
  }

  return <BannerContext.Provider value={{ allBanners, selectedBanner, selectedBannerKey, onEditBanner, onChangeBanner }}>
    {children}
  </BannerContext.Provider>
}

export default function useBannerContext() {
  const context = useContext(BannerContext);
  return context;
}