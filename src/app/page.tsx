"use client";
import Banner from "@/components/Banner";
import useBannerContext, { BannerProvider } from "../utils/BannerContext";
import EditElement from "@/components/EditElement";

export default function Home() {
  return (
    <BannerProvider>
      <Wrapper />
    </BannerProvider>
  )
}

function Wrapper() {
  const { selectedBanner, allBanners, selectedBannerKey } = useBannerContext();
  return <main className="max-w-[1700px] mx-auto">
  <h1 className="text-[44px] text-center">Below listed are all the banners</h1>
    <div className="flex flex-wrap items-center justify-center gap-20 py-20">
      {allBanners.map(banner =>
        <Banner
          key={banner.key}
          elementConfig={banner}
          editable
        />
      )}
    </div>
    {selectedBanner && <EditElement selectedBanner={selectedBanner} key={selectedBannerKey} />}
  </main>
}