import { LinkedinIcon } from "@/assets/Icons";
import { CardTemplate } from "@/components/ui/prebuilts/CardTemplate";

export function LinkedInDashboard() {
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
          <CardTemplate className="w-full m-2 h-72" cardContent={<p>Test</p>} />
          <CardTemplate className="w-full m-2" cardContent={<p>Test</p>} />
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
