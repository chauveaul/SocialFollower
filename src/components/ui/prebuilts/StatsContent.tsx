import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { LinkedInDashboard } from "@/components/ui/prebuilts/LinkedInDashboard";

export function StatsContent() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <LinkedInDashboard />
        </CarouselItem>
        {/* TODO: Add instagram, and other social media sats here when they're complete */}
        {/* <CarouselItem> </CarouselItem> */}
        {/* <CarouselItem> </CarouselItem> */}
        {/* <CarouselItem> </CarouselItem> */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
