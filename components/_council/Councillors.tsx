import Image from "next/image";
import Link from "next/link";

const CouncillorsData = [
  {
    ward: "ward 1",
    name: "Cllr Jabulani Sibisi",
    party: "anc",
    img: "/img/councillors/Cllr-Jabulani-Sibisi-Ward-1-ANC.webp",
    id: "1",
  },
  {
    ward: "ward 2",
    name: "Cllr Moranye Twala",
    party: "anc",
    img: "/img/councillors/Cllr-Moranye-Twala-Ward-2-ANC.webp",
    id: "2",
  },
  {
    ward: "ward 3",
    name: "Cllr Petro van Wyk",
    party: "anc",
    img: "/img/councillors/Cllr-Petro-van-Wyk-Ward-3-ANC.webp",
    id: "3",
  },
  {
    ward: "ward 4",
    name: "Cllr Lebohang Radebe",
    party: "anc",
    img: "/img/councillors/Cllr-Lebohang-Radebe-Ward-4-ANC.webp",
    id: "4",
  },
  {
    ward: "ward 5",
    name: "Cllr Mmadineo Miya",
    party: "anc",
    img: "/img/councillors/Cllr-Mmadineo-Miya-Ward-5-ANC.webp",
    id: "5",
  },
  {
    ward: "ward 6",
    name: "Cllr Jane Twala",
    party: "anc",
    img: "/img/councillors/Cllr-Jane-Twala-Ward-6-ANC.webp",
    id: "6",
  },
  {
    ward: "ward 7",
    name: "Cllr Mokete Makhathini",
    party: "anc",
    img: "/img/councillors/Cllr-Mokete-Makhathini-WArd-7-ANC.webp",
    id: "7",
  },
  {
    ward: "ward 8",
    name: "Cllr Vusumuzi Hadebe",
    party: "anc",
    img: "/img/councillors/Cllr-Vusumuzi-Hadebe-Ward-8-ANC.webp",
    id: "8",
  },
  {
    ward: "ward 9",
    name: "Cllr Phillip Maasdorp",
    party: "da",
    img: "/img/councillors/Cllr-Phillip-Maasdorp-Ward-9-DA.webp",
    id: "9",
  },
  {
    ward: "ward 10",
    name: "Cllr Isolde Laesecke",
    party: "ind",
    img: "/img/councillors/Cllr-Isolde-laesecke-Ward-10-IND.webp",
    id: "10",
  },
  {
    ward: "ward 11",
    name: "Cllr Malela Masangane",
    party: "anc",
    img: "/img/councillors/Cllr-Malela-Masangane-Ward-11-ANC.webp",
    id: "11",
  },
  {
    ward: "ward 12",
    name: "Cllr Motshedisi Mokwena",
    party: "anc",
    img: "/img/councillors/Cllr-Motshedisi-Mokwena-Ward-12-ANC.webp",
    id: "12",
  },
  {
    ward: "ward 13",
    name: "Cllr Mokuwane Mosia",
    party: "anc",
    img: "/img/councillors/Cllr-Mokuwane-Mosia-Ward-13-ANC.webp",
    id: "13",
  },
  {
    ward: "ward 14",
    name: "Cllr Tseki Tseki",
    party: "anc",
    img: "/img/councillors/Cllr-Tseki-Tseki-Ward-14-ANC.webp",
    id: "14",
  },
  {
    ward: "ward 15",
    name: "Cllr Moliehi Sempe",
    party: "anc",
    img: "/img/councillors/Cllr-Moliehi-Sempe-Ward-15-ANC.webp",
    id: "15",
  },
  {
    ward: "ward 16",
    name: "Cllr Duduzile Sibisi",
    party: "anc",
    img: "/img/councillors/Cllr-Duduzile-Sibisi-Ward-16-ANC.webp",
    id: "16",
  },
  {
    ward: "ward 17",
    name: "Cllr Malefetsane Mokoena",
    party: "anc",
    img: "/img/councillors/Cllr-Malefetsane-Mokoena-PR-EFF.webp",
    id: "17",
  },
  {
    ward: "ward 18",
    name: "Cllr Emely Mabizela",
    party: "anc",
    img: "/img/councillors/Cllr-Emely-Mabizela-Ward-18-ANC.webp",
    id: "18",
  },
  {
    ward: "ward 19",
    name: "Cllr Tsekiso Tsibela",
    party: "anc",
    img: "/img/councillors/Cllr-Tsekiso-Tsibela-Ward-19-ANC.webp",
    id: "19",
  },
  {
    ward: "ward 20",
    name: "Cllr Johan Nhlapo",
    party: "anc",
    img: "/img/councillors/Cllr-Johan-Nhlapo-Ward-20-ANC.webp",
    id: "20",
  },
];

export function Councillors() {
  return (
    <article className="flex flex-wrap gap-8 justify-center items-center my-24 px-3 py-6 mx-auto">
      {CouncillorsData.map((councillor) => (
        <Link key={councillor.ward} href={`/council/${councillor.id}`}>
          <figure
            key={councillor.id}
            className="p-3 flex flex-col justify-center items-center"
          >
            <h2 className="text-xl uppercase px-3 py-6 dark:text-gray-100 font-bold">
              {councillor.ward}
            </h2>
            <span className="flex justify-center items-center relative h-60 w-60">
              <Image
                className="absolute rounded-full px-6 py-1"
                src={councillor.img}
                alt={councillor.name}
                fill
              />
            </span>

            <h3 className="text-lg text-blue-900 dark:text-gray-200">
              {councillor.name}
            </h3>
            <figcaption className="text-sm text-gray-400 uppercase">
              {councillor.party}
            </figcaption>
          </figure>
        </Link>
      ))}
    </article>
  )

}
