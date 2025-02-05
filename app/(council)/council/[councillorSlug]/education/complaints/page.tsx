import { educationData } from "@/components/_council/_Councillor/_Education/education-api";
import { EducationComplaintsForm } from "@/components/_council/_Councillor/_Education/EducationComplaintsForm";

type Params = Promise<{ councillorSlug: string }>;

export default async function EducationComplaintsPage(props: { params: Params }) {

  const params = await props.params;
  const councillorSlug = parseInt(params.councillorSlug);
  console.log({ councillorSlug });

  const education = educationData.filter(item => item.ward === councillorSlug);
  console.log({ education });

  return (
    <>
      <EducationComplaintsForm schools={education} />
    </>
  );
}
