import { CouncillorComp } from "@/components/_council/_Councillor/Councillor";
import { WardPage } from "@/components/_council/_Councillor/Ward";

type Params = Promise<{ councillorSlug: string }>;

export default async function CouncillorPage(props: { params: Params }) {

  const params = await props.params;
  const councillorSlug = params.councillorSlug;
  console.log({ councillorSlug });

  return (
    <>
      <CouncillorComp />
      <WardPage councillorId={councillorSlug} />
    </>
  );
}
