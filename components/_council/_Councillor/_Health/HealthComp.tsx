
import { EMS } from "@/components/_council/_Councillor/_Health/EMS";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export type HealthCompProps = {
  img: string;
  name: string;
  description: string;
  link: string;
}

export default function HealthComp({ health }: { health: HealthCompProps }) {
  return (
    <section className="flex flex-col justify-center md:w-4/5 lg:w-3/5 mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-3 bg-card p-4 rounded-xl">
        {/* Image Section */}
        <div className="relative w-full h-72">
          <Image
            src={health.img}
            alt={health.name}
            fill
            className="absolute inset-0 object-cover"
            priority
          />
        </div>
        {/* Card Section */}
        <Card className="w-full h-72">
          <CardHeader>
            <CardTitle>{health.name}</CardTitle>
            <CardDescription>
              {health.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EMS />
          </CardContent>
          <CardFooter>
            <Link href={health.link}>
              <Button variant="outline" className="w-full">
                Complaints
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
