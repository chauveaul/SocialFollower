import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { LinkedInDashboard } from "@/components/ui/prebuilts/Dashboard/LinkedInDashboard";
import { InstagramDashboard } from "@/components/ui/prebuilts/Dashboard/InstagramDashboard";
import Settings from "@/components/ui/prebuilts/Dashboard/Settings";
import { TikTokDashboard } from "./TikTokDashboard";
import { YouTubeDashboard } from "./YouTubeDashboard";

export default function DashboardCarousel() {
  return (
    <Carousel className="dashboard-carousel" orientation="vertical">
      <CarouselContent>
        <CarouselItem key={1}>
          <LinkedInDashboard />
        </CarouselItem>
        <CarouselItem key={2}>
          <InstagramDashboard />
        </CarouselItem>
        <CarouselItem key={3}>
          <TikTokDashboard />
        </CarouselItem>
        <CarouselItem key={4}>
          <YouTubeDashboard />
        </CarouselItem>
        <CarouselItem key={5}>{/* Profile */}</CarouselItem>
        <CarouselItem key={6}>
          <Settings />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
