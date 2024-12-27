import { AboutContent } from "@/components/AboutContent"
import { SubPagesHero } from "@/components/SubPagesHero"

export const About = () => {
    return (
        <>
        <SubPagesHero title="About Us" description="Our mission is to simplify medical billing, and our vision is to empower healthcare providers to focus on patient care." />
        <AboutContent />
        </>
    )
}