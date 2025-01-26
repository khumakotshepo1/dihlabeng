import { TypographyH4 } from "@/components/typography";
import { Card } from "@/components/ui/card";
import { BookOpenTextIcon, FactoryIcon, HospitalIcon, ShieldIcon, TentTreeIcon } from "lucide-react";
import Link from "next/link";

export function WardPage({ councillorId }: { councillorId: string }) {

  return (
    <section className="flex flex-wrap items-center justify-center gap-3">
      <Link href={`/council/${councillorId}/health`} className="transition-all transform hover:scale-110">
        <Card className="flex flex-col items-center justify-center space-y-2 p-4 text-center bg-red-600/70 w-80 lg:w-40 lg:h-96">
          <HospitalIcon className="h-8 w-8 text-foreground z-10" />
          <TypographyH4 className="mt-2 text-xl font-lora font-light text-foreground z-10">Health</TypographyH4>
        </Card>
      </Link>

      <Link href={`/council/${councillorId}/security`} className="transition-all transform hover:scale-110">
        <Card className="flex flex-col items-center justify-center space-y-2 p-4 text-center bg-blue-600/70 w-80 lg:w-40 lg:h-96">
          <ShieldIcon className="h-8 w-8 text-foreground z-10" />
          <TypographyH4 className="mt-2 text-xl font-lora font-light text-foreground z-10">Security</TypographyH4>
        </Card>
      </Link>

      <Link href={`/council/${councillorId}/recreation`} className="transition-all transform hover:scale-110">
        <Card className="flex flex-col items-center justify-center space-y-2 p-4 text-center bg-green-600/70 w-80 lg:w-40 lg:h-96">
          <TentTreeIcon className="h-8 w-8 text-foreground z-10" />
          <TypographyH4 className="mt-2 text-xl font-lora font-light text-foreground z-10">Recreation</TypographyH4>
        </Card>
      </Link>

      <Link href={`/council/${councillorId}/business`} className="transition-all transform hover:scale-110">
        <Card className="flex flex-col items-center justify-center space-y-2 p-4 text-center bg-cyan-600/70 w-80 lg:w-40 lg:h-96">
          <FactoryIcon className="h-8 w-8 text-foreground z-10" />
          <TypographyH4 className="mt-2 text-xl font-lora font-light text-foreground z-10">Businesses</TypographyH4>
        </Card>
      </Link>

      <Link href={`/council/${councillorId}/education`} className="transition-all transform hover:scale-110">
        <Card className="flex flex-col items-center justify-center space-y-2 p-4 text-center bg-yellow-600/70 w-80 lg:w-40 lg:h-96">
          <BookOpenTextIcon className="h-8 w-8 text-foreground z-10" />
          <TypographyH4 className="mt-2 text-xl font-lora font-light text-foreground z-10">Education</TypographyH4>
        </Card>
      </Link>
    </section>
  );
}
