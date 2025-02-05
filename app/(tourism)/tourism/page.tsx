import { JolContent } from "@/components/tourism/JolContent";
import { JolHero } from "@/components/tourism/JolHero";
import { EventsApi, StayApi, TownsApi } from "@/components/tourism/TourismApi";

export default function TourismPage() {
  return (
    <>
      <JolHero />

      <section className="flex flex-col justify-center items-center gap-3 px-2 py-6">
        <JolContent title="Neighbourhoods" data={TownsApi} />
        <JolContent title="Events" data={EventsApi} />
        <JolContent title="Stay" data={StayApi} />
      </section>
    </>
  );
}
