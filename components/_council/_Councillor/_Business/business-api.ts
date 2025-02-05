export type BusinessCompProps = {
  img: string;
  business_name: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  owner: string;
  link: string;
  ward: number;
}

export const businessData: BusinessCompProps[] = [
  {
    img: "/img/business/ttbusiness.webp",
    business_name: "Dabulamanzi Restaurant",
    description: "Dabulamanzi Restaurant",
    phone: "+27583035072",
    email: "440101108@fsschoolsportal.gov.za",
    address: "1163 B Manye Street",
    owner: "Mr. Mokoena",
    link: "business/complaints",
    ward: 8,
  },
  {
    img: "/img/business/ttbusiness.webp",
    business_name: "My friend",
    description: "My friend",
    phone: "+27583035072",
    email: "440101108@fsschoolsportal.gov.za",
    address: "1163 B Manye Street",
    owner: "Mr. Mokoena",
    link: "business/complaints",
    ward: 8,
  },

]
