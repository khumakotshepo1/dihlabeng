import { businessData } from "@/components/_council/_Councillor/_Business/business-api";
import BusinessComp from "@/components/_council/_Councillor/_Business/BusinessComp";


export default function BusinessPage() {
  return <BusinessComp businesses={businessData} />
}
