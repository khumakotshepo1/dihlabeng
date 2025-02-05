import { educationData } from "@/components/_council/_Councillor/_Education/education-api";
import EducationComp from "@/components/_council/_Councillor/_Education/EducationComp";


export default function EducationPage() {

  return <EducationComp schools={educationData} />
}
