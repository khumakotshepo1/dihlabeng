import { ModeToggle } from "@/components/mode-toggle";
import { TypographyH4 } from "@/components/typography";
import { Card } from "@/components/ui/card";
import { TextEffect } from "@/components/ui/text-effect";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {

  interface HomePageProps {
    title: string;
    img: string;
    link: string;
  }

  const homePageProps: HomePageProps[] = [
    {
      title: "Executive",
      img: "/img/core/townhall.webp",
      link: "/executive",
    },
    {
      title: "Administrative",
      img: "/img/core/dihlabeng_hq.webp",
      link: "/administrative",
    },
    {
      title: "Council",
      img: "/img/core/council.webp",
      link: "/council",
    },
    {
      title: "Tourism",
      img: "/img/core/jol-hero.webp",
      link: "/tourism",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10 bg-townhall bg-cover bg-center bg-no-repeat h-screen">
      <div className="h-screen inset-0 absolute bg-gradient-to-b from-gray-300 to-transparent dark:from-black dark:to-transparent mix-blend-multiply opacity-50" />
      <div className="absolute top-1 right-1 md:top-6 md:right-6">
        <ModeToggle />
      </div>
      <div className="flex flex-col items-center z-10 mt-5">
        <Image
          src="/img/core/logo-1.webp"
          alt="Dihlabeng Local Municipality Logo"
          width={100}
          height={100}
        />
        <TextEffect per='char' preset='fade' className="text-4xl sm:text-5xl lg:text-6xl font-normal text-center tracking-tight leading-tight font-poppins">
          Dihlabeng Local Municipality
        </TextEffect>

      </div>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-24 overflow-hidden">
        {homePageProps.map((item, idx) => (
          <Link key={idx} href={item.link}>

            <Card className="relative rounded-xl h-80 w-96 transition-all transform hover:scale-105 hover:shadow-lg border-0">
              <Image
                src={item.img}
                alt={item.title}
                className="absolute inset-0 object-cover rounded-xl"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-orange-600 mix-blend-multiply opacity-50 rounded-xl" />
              <TypographyH4 className='absolute bottom-0 left-0 right-0 text-start bg-background/75 py-10 pl-4 uppercase'>
                {item.title}
              </TypographyH4>
            </Card>


          </Link>
        ))}
      </section>
    </div>
  );
}
