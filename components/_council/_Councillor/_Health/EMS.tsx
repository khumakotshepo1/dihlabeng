import { TypographyH4 } from "@/components/typography";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";

interface EmsProps {
  title: string;
  tel: string;
  email: string;
}

const EmsData: EmsProps[] = [
  {
    title: "EMS",
    tel: "112",
    email: "ems@phekolong.com",
  },
  {
    title: "ER24",
    tel: "112",
    email: "er24@phekolong.com",
  },
  {
    title: "NETCARE",
    tel: "112",
    email: "netcare@phekolong.com",
  },
]

export function EMS() {
  return (
    <>
      <TypographyH4 className="text-lg font-light underline text-red-600">
        Emergency Services
      </TypographyH4>
      <ul>
        {EmsData.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <p>{item.title}</p>
            <Link href={`tel:${item.tel}`}>
              <PhoneIcon className="h-3 w-3 animate-pulse text-red-600" />
            </Link>
          </li>

        ))}
      </ul>
    </>
  );
}
