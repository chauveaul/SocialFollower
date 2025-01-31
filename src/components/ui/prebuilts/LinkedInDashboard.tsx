import { LinkedinIcon } from "@/assets/Icons";
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
    <div className="m-4 flex flex-col gap-8">
      {/*NOTE:  ^^^^ This will be the overall container that will define the size of the section */}
      {/* Important for the correct sizing to see the next tab appear at the bottom of the screen */}
      <div className="flex text-white/[0.8] gap-4 items-center">
        <LinkedinIcon />
        <h1 className="text-7xl">LinkedIn</h1>
      </div>
      <div className="flex flex-col gap-4">
        {/* NOTE: This is the div for the top layer of the cards */}
        <div className="flex justify-between gap-2">
          <CardTemplate
            className="w-full m-2 justify-center items-center"
            cardTitle={<h1 className="font-normal text-4xl">Impressions</h1>}
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
            className="w-full m-2"
            cardTitle={<h1 className="font-normal text-4xl">Followers</h1>}
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
          <CardTemplate className="w-full m-2 h-52" cardContent={<p>Test</p>} />
          <CardTemplate className="w-full m-2" cardContent={<p>Test</p>} />
          <CardTemplate className="w-full m-2" cardContent={<p>Test</p>} />
        </div>
      </div>
    </div>
  );
}
