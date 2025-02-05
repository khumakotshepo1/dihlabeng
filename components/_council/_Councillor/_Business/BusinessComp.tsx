
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { BusinessCompProps } from "./business-api";

export default function BusinessComp({ businesses }: { businesses: BusinessCompProps[] }) {
  return (
    <section className="flex flex-col justify-center gap-2 md:w-4/5 lg:w-3/5 mx-auto">
      {businesses.map((business) => (
        <div key={business.business_name} className="flex flex-col lg:flex-row items-center gap-3 bg-card p-4 rounded-xl">
          {/* Image Section */}
          <div className="relative w-full h-72">
            <Image
              src={business.img}
              alt={business.business_name}
              fill
              className="absolute inset-0 object-cover"
              priority
            />
          </div>
          {/* Card Section */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>{business.business_name}</CardTitle>
              <CardDescription>
                {business.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-evenly">
              <div className="flex flex-col gap-2 w-full">
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-lg text-blue-900 dark:text-gray-200">{business.address}</p>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-lg text-blue-900 dark:text-gray-200">{business.phone}</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-8 p-6">
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-400">Owner</p>
                  <p className="text-lg text-blue-900 dark:text-gray-200">{business.owner}</p>
                </div>

              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 justify-center">
              <Link href={business.link} className="w-full">
                <Button variant="destructive" className="w-full">
                  Report
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      ))}
    </section>
  );
}
