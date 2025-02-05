import { businessData } from "@/components/_council/_Councillor/_Business/business-api";
import { BusinessComplaintsForm } from "@/components/_council/_Councillor/_Business/BusinessComplaintsForm";

export type Params = Promise<{ councillorSlug: string }>;

export default async function BusinessComplaintsPage(props: { params: Params }) {
  const params = await props.params;
  const councillorSlug = parseInt(params.councillorSlug);
  console.log({ councillorSlug });

  const business = businessData.filter(item => item.ward === councillorSlug);
  console.log({ business });

  return (
    <>
      <BusinessComplaintsForm businesses={business} />
    </>
  );
}
