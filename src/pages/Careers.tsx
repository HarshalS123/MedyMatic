import { CareersAbout } from "@/components/CareersAbout"
import { CareersNewOpening } from "@/components/CareersNewOpening"
import { SubPagesHero } from "@/components/SubPagesHero"

export const Careers = () => {
    return (
        <>
            <SubPagesHero
                title="Careers"
                description="At MedyMatic, we are committed to creating a positive work environment where everyone can thrive."
            />
            <CareersAbout />
            <CareersNewOpening />

        </>
    )
}