import HealthComp, { HealthCompProps } from "@/components/_council/_Councillor/_Health/HealthComp";

const healthData: HealthCompProps = {
  img: "/img/health/phekolong.webp",
  name: "Phekolong District Hospital",
  description: "PDH is a health care facility, where the patients wellbeing is our priority",
  link: "health/complaints",
}

export default function HealthPage() {
  return (
    <>
      <HealthComp health={healthData} />
    </>
  );
}
