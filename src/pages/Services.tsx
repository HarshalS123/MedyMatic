import { Newsletter } from "@/components/Newsletter"
import { ServicesAbout } from "@/components/ServicesAbout"
import { SubPagesHero } from "@/components/SubPagesHero"
import { ServicesPayers } from "@/components/ServicesPayers"

export const Services = () => {
    return (
        <>
        <SubPagesHero
  title="Services"
  description="At MedyMatic Business Solutions, we excel in medical billing services, leveraging cutting-edge technology and industry expertise to optimize revenue streams for healthcare providers."
/>
        <ServicesAbout />
        <ServicesPayers />
        <Newsletter />
        </>
    )
}