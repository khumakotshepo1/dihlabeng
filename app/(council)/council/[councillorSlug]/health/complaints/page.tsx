import { HealthComplaintsForm } from "@/components/_council/_Councillor/_Health/ComplaintsForm";

export type HealthProps = {
  name: string;
  description: string;
  ward: number;
}


const healthData: HealthProps[] = [
  {
    name: "Phekolong District Hospital",
    description: "PDH is a health care facility, where the patients wellbeing is our priority",
    ward: 8,
  },
  {
    name: "Phekolong District Hospital2",
    description: "PDH is a health care facility, where the patients wellbeing is our priority",
    ward: 1,
  },

]


type Params = Promise<{ councillorSlug: string }>;

export default async function ComplaintsPage(props: { params: Params }) {
  const params = await props.params;
  const councillorSlug = parseInt(params.councillorSlug);
  console.log({ councillorSlug });

  const health = healthData.filter(item => item.ward === councillorSlug);
  console.log({ health });

  return (
    <>
      <HealthComplaintsForm health={health} />
    </>
  );
}
