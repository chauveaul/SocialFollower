import { TikTokIcon } from "@/assets/Icons";
import { CardTemplate } from "@/components/ui/prebuilts/CardTemplate";

export function TikTokDashboard() {
  return (
    <div className="m-4 mt-16 flex flex-col gap-8 w-[95%]">
      {/*NOTE:  ^^^^ This will be the overall container that will define the size of the section */}
      {/* Important for the correct sizing to see the next tab appear at the bottom of the screen */}
      <div className="flex justify-between">
        <div className="flex text-white/[0.8] gap-4 items-center">
          <TikTokIcon />
          <h1 className="text-7xl">TikTok</h1>
        </div>
        {/* TODO: Combobox for timeframe of charts, ex. (last week, last month, etc.) */}
      </div>
      <div className="flex flex-col gap-4 w-full">
        {/* NOTE: This is the div for the top layer of the cards */}
        <div className="flex justify-between gap-2">
          <CardTemplate
            className="h-[34rem] w-[86vw] max-w-[86vw] m-2 justify-center items-center"
            cardContent={
              <div className="mt-[15rem] h-[34rem] flex justify-center align-center">
                <h1 className="text-5xl">Coming soon</h1>
              </div>
            }
          />
        </div>
        {/* NOTE: This is the div for the bottom layer of the cards */}
      </div>
    </div>
  );
}
