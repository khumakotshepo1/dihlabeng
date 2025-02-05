
export type EducationCompProps = {
  img: string;
  school_name: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  principal: string;
  link: string;
  ward: number;
}

export const educationData: EducationCompProps[] = [
  {
    img: "/img/education/impucuko.webp",
    school_name: "Impucuko Primary School",
    description: "Grade R to Grade 6",
    phone: "+27583041971",
    email: "impucukoschool@gmail.com",
    address: "1548A MABIZELA STREET",
    principal: "Mrs. Mabizela",
    link: "education/complaints",
    ward: 8,
  },
  {
    img: "/img/education/ttsecondary.webp",
    school_name: "Thabo Thokoza Secondary School",
    description: "Grade 8 to Grade 12",
    phone: "+27583035072",
    email: "440101108@fsschoolsportal.gov.za",
    address: "1163 B Manye Street",
    principal: "Mr. Mokoena",
    link: "education/complaints",
    ward: 8,
  },

]
