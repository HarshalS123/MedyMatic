import { FormCareer } from "@/components/FormCareer"
import { SubPagesHero } from "@/components/SubPagesHero"

export const CareerForm = () => {
    return (
        <>
            <SubPagesHero
                title="Career Form"
                description="Our mission is to simplify medical billing, and our vision is to empower healthcare providers to focus on patient care."
            />
            <FormCareer />
        </>
    )
}