
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog';

import Image from "next/image";

interface Councillor {
  ward: string;
  name: string;
  party: string;
  img: string;
  id: string;
  flag: string;
}

const Data: Councillor[] = [
  {
    ward: "ward 8",
    name: "Cllr Vusumuzi Hadebe",
    party: "anc",
    img: "/img/councillors/Cllr-Vusumuzi-Hadebe-Ward-8-ANC.webp",
    id: "8",
    flag: "/img/party-flags/anc-logo.webp",
  },

]


export function CouncillorComp() {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: '4px',
        }}
        className='border-b-8 border-gray-200 dark:border-gray-600 bg-background flex items-center justify-around my-6 pr-2 md:p-0 w-full lg:w-2/3 mx-auto'
      >
        <div className='flex items-center space-x-3 p-3'>
          <MorphingDialogImage
            src={Data[0].img}
            alt='What I Talk About When I Talk About Running - book cover'
            className='h-28 w-28 object-cover object-top'
            style={{
              borderRadius: '4px',
            }}
          />
          <div className='flex flex-col items-start justify-center space-y-0'>
            <MorphingDialogTitle className='text-[10px] font-medium text-foreground text-xs md:text-lg'>
              {Data[0].name}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='text-[10px] text-gray-600 sm:text-xs'>
              {Data[0].party}
            </MorphingDialogSubtitle>
          </div>
        </div>
        <Image src={Data[0].flag} alt="flag" width={100} height={100} className="rounded-full" />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '12px',
          }}
          className='relative h-auto w-[500px] border border-gray-200 dark:border-gray-600 bg-background'
        >
          <div className='h-screen md:h-[90vh]'>
            <div className='relative p-6'>
              <div className='flex justify-center py-10'>
                <MorphingDialogImage
                  src={Data[0].img}
                  alt='What I Talk About When I Talk About Running - book cover'
                  className='h-auto w-[200px]'
                />
              </div>
              <div className=''>
                <MorphingDialogTitle className='text-foreground font-black'>
                  {Data[0].name}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className='font-light text-gray-800 dark:text-gray-600'>
                  {Data[0].ward}
                </MorphingDialogSubtitle>
                <div className='mt-4 text-sm text-gray-700 dark:text-gray-500 overflow-y-auto max-h-[40vh] scrollbar-hidden'>
                  <p>
                    In 1982, having sold his jazz bar to devote himself to
                    writing, Murakami began running to keep fit. A year later,
                    he’d completed a solo course from Athens to Marathon, and
                    now, after dozens of such races, not to mention triathlons
                    and a dozen critically acclaimed books, he reflects upon the
                    influence the sport has had on his life and—even more
                    important—on his writing.
                  </p>
                  <p>
                    Equal parts training log, travelogue, and reminiscence, this
                    revealing memoir covers his four-month preparation for the
                    2005 New York City Marathon and takes us to places ranging
                    from Tokyo’s Jingu Gaien gardens, where he once shared the
                    course with an Olympian, to the Charles River in Boston
                    among young women who outpace him. Through this marvelous
                    lens of sport emerges a panorama of memories and insights:
                    the eureka moment when he decided to become a writer, his
                    greatest triumphs and disappointments, his passion for
                    vintage LPs, and the experience, after fifty, of seeing his
                    race times improve and then fall back.
                  </p>
                  <p>
                    By turns funny and sobering, playful and philosophical, What
                    I Talk About When I Talk About Running is rich and
                    revelatory, both for fans of this masterful yet guardedly
                    private writer and for the exploding population of athletes
                    who find similar satisfaction in running.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <MorphingDialogClose className='text-foreground' />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

