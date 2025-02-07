import { LinkedinIcon, TriangleIcon } from "@/assets/Icons";
import { CardTemplate } from "@/components/ui/prebuilts/CardTemplate";
import { LineChartTemplate } from "@/components/ui/prebuilts/LineChartTemplate";

export function LinkedInDashboard() {
  const impressionsChartData = [
    { month: "January", impressions: 100 },
    { month: "February", impressions: 184 },
    { month: "March", impressions: 263 },
    { month: "April", impressions: 134 },
    { month: "May", impressions: 367 },
    { month: "June", impressions: 95 },
    { month: "July", impressions: 154 },
  ];

  const followerChartData = [
    { month: "January", followers: 84 },
    { month: "February", followers: 145 },
    { month: "March", followers: 263 },
    { month: "April", followers: 300 },
    { month: "May", followers: 367 },
    { month: "June", followers: 345 },
    { month: "July", followers: 467 },
  ];
  return (
    <div className="m-4 mt-16 flex flex-col gap-8 w-[95%]">
      {/*NOTE:  ^^^^ This will be the overall container that will define the size of the section */}
      {/* Important for the correct sizing to see the next tab appear at the bottom of the screen */}
      <div className="flex justify-between">
        <div className="flex text-white/[0.8] gap-4 items-center">
          <LinkedinIcon />
          <h1 className="text-7xl">LinkedIn</h1>
        </div>
        {/* TODO: Combobox for timeframe of charts, ex. (last week, last month, etc.) */}
      </div>
      <div className="flex flex-col gap-4 w-full">
        {/* NOTE: This is the div for the top layer of the cards */}
        <div className="flex justify-between gap-2">
          <CardTemplate
            className="w-[45rem] max-w-[43vw] m-2 justify-center items-center"
            cardTitle={
              <div className="flex justify-between">
                <h1 className="font-normal text-4xl">Impressions</h1>
                <div className="flex items-center justify-center gap-2">
                  <TriangleIcon
                    width={36}
                    height={36}
                    stroke="#28C840"
                    fill="#28C840"
                  />
                  <span className="text-3xl">+43.5%</span>
                </div>
              </div>
            }
            cardContent={
              <LineChartTemplate
                chartData={impressionsChartData}
                xDataKey="month"
                yDataKey="impressions"
                className="h-52 w-full"
              />
            }
          />
          <CardTemplate
            className="w-[45rem] max-w-[43vw] m-2"
            cardTitle={
              <div className="flex justify-between">
                <h1 className="font-normal text-4xl">Followers</h1>
                <div className="flex items-center justify-center gap-2">
                  <TriangleIcon
                    width={36}
                    height={36}
                    stroke="#FE5F57"
                    fill="#FE5F57"
                    className="rotate-180"
                  />
                  {/*NOTE: for the positive and negative indications, check for */}
                  {/*the sign in front of the number */}
                  <span className="text-3xl">-13.2%</span>
                </div>
              </div>
            }
            cardContent={
              <LineChartTemplate
                chartData={followerChartData}
                xDataKey="month"
                yDataKey="followers"
                className="h-52 w-full"
              />
            }
          />
        </div>
        {/* NOTE: This is the div for the bottom layer of the cards */}
        <div className="flex justify-between gap-2">
          <CardTemplate
            className="w-full m-2 h-44 flex flex-col justify-center"
            cardContent={
              <div className="flex justify-between items-center">
                <h1 className="text-5xl">Likes</h1>
                <div className="flex gap-2 items-center">
                  <TriangleIcon
                    width={36}
                    height={36}
                    fill="#28C840"
                    stroke="#28C840"
                  />
                  <span className="text-4xl">+13.5%</span>
                </div>
              </div>
            }
          />
          <CardTemplate
            className="w-full m-2 flex flex-col justify-center"
            cardContent={
              <div className="flex justify-between items-center">
                <h1 className="text-5xl">Reach</h1>
                <div className="flex gap-2 items-center">
                  <TriangleIcon
                    width={36}
                    height={36}
                    fill="#28C840"
                    stroke="#28C840"
                  />
                  <span className="text-4xl">+4.7%</span>
                </div>
              </div>
            }
          />
          <CardTemplate
            className="w-full m-2 flex flex-col justify-center"
            cardContent={
              <div className="flex justify-between items-center">
                <h1 className="text-4xl">Engagement</h1>
                <div className="flex gap-2 items-center">
                  <TriangleIcon
                    width={36}
                    height={36}
                    className="rotate-180"
                    stroke="#FE5F57"
                    fill="#FE5F57"
                  />
                  <span className="text-4xl">-21.8%</span>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
