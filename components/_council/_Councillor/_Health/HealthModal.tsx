import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AccessibilityIcon, BriefcaseIcon, CalendarSyncIcon, CogIcon } from "lucide-react";

export function ServicesModal() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Dialog>
        <DialogTrigger className="bg-background p-2 rounded-full"><BriefcaseIcon className="w-8 h-8" /></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Services Rendered</DialogTitle>
            <DialogDescription>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
                <li>Casualty</li>
                <li>Outpatient Department</li>
                <li>Medical, Surgical and Paediatric Wards</li>
                <li>Maternity Ward</li>
                <li>Pharmacy</li>
                <li>Radiography/ X Ray</li>
                <li>Operating Theatre</li>
                <li>Dietetics Service</li>
                <li>Food Service</li>
                <li>Orthopaedic Workshop</li>
                <li>Rehabilitation Service: Physiotherapy, Occupational Therapy, Audio and Speech Therapy</li>
                <li>HIV Counselling and Testing (HCT)</li>
                <li>ART</li>
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <p>Services</p>
    </div>
  )
}

export function AdmissionModal() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Dialog>
        <DialogTrigger className="bg-background p-2 rounded-full"><AccessibilityIcon className="w-8 h-8" /></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admission</DialogTitle>
            <DialogDescription>
              <p className="py-1">What to bring to the hospital when being admitted</p>
              <ol className="mt-4 space-y-2 text-sm list-decimal pl-5">
                <li>ID document / passport</li>
                <li>A referral letter from clinic / private doctor (H301)</li>
                <li>Proof of residence</li>
                <li>At least R30 for admissions and R20 for consultation</li>
                <li>Proof of being unemployed (e.g., UIF card)</li>
                <li>Your pension card if you are a pensioner</li>
                <li>Your Medical Aid card/number if you belong to a medical aid</li>
                <li>Your SANDF force number if you are working for the SANDF</li>
                <li>
                  If you are injured at work, your employer must fill in the employer&apos;s report, and you must bring it for admission as a WCA (injury on duty)
                </li>
                <li>
                  If you have been involved in an accident (MVA), your correct particulars, particulars of the vehicle that caused the accident, and the exact place where the accident occurred are needed.
                </li>
                <li>For admission, the necessary documents must be completed.</li>
              </ol>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <p>Admission</p>
    </div>
  )
}

export function FreeServicesModal() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Dialog>
        <DialogTrigger className="bg-background p-2 rounded-full"><CogIcon className="w-8 h-8" /></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Free Services Rendered</DialogTitle>
            <DialogDescription>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5 text-justify">
                <li>PREGNANT WOMAN AND CHILDREN UNDER THE AGE OF 5 YEARS</li>
                <li>32 DAYS AFTER CHILD BIRTH (MOTHER AND CHILD)</li>
                <li>TERMINATION OF PREGNANCY</li>
                <li>FORENSIC SERVICES FOR VICTIMS OF DOMESTIC AND SEXUAL VIOLENCE</li>
                <li>PERSONS WITH MENTAL DISORDERS</li>
                <li>PERSONS WITH DISABILITIES</li>
                <li>INFECTIOUS, FORMIDABLE AND / OR NOTIFIABLE DISEASES</li>
                <li>PERSONS SUFFERING FROM MALNUTRITION, PELLAGRA AND ANY OTHER DETERMINED BY PROVINCE</li>
                <li>PERSONS ON PENSION / GRANT</li>
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <p>Free</p>
    </div>
  )
}

export function ReferralModal() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Dialog>
        <DialogTrigger className="bg-background p-2 rounded-full"><CalendarSyncIcon className="w-8 h-8" /></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Referral System</DialogTitle>
            <DialogDescription>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5 text-justify">
                <li>Patients should visit the nearest clinic available between 07h30 – 16:00 Mondays to Fridays.</li>
                <li>Should there be a need for the Clinic Sister to refer the patient to the next level of care, it must be done with a referral letter (H301).</li>
                <li>The referral letter should be submitted at the nearest District Hospital, which in this case is Phekolong or Nketoana District Hospitals.</li>
                <li>Should there be a need for the District Hospital staff to refer the patient to the next level of care, another referral letter will be issued (H301).</li>
                <li>The referral letter should then be submitted at the Regional Hospital (Dihlabeng Regional Hospital).</li>
                <li>In the event where patients need tertiary level of care, the patients will be referred to Universitas Hospital in Bloemfontein.</li>
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <p>Referral</p>
    </div>
  )
}
