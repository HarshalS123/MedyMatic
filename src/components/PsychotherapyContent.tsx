import doctor from "@/assets/Doctor.png"
import doctorandtable from "@/assets/doctorandtable.png"
import sickman from "@/assets/sickman.png"

interface PsychotherapyCode {
    code: string;
    description: string;
}

const psychotherapyCodes: PsychotherapyCode[] = [
    {
        code: "90791",
        description:
            "Psychiatric diagnostic evaluation without medical services. This code is used for initial evaluations conducted by psychiatrists, psychologists, or other qualified mental health professionals. It includes a comprehensive assessment of the patient's mental health history, current symptoms, and functional status, as well as the formulation of a diagnosis and initial treatment plan.",
    },
    {
        code: "90792",
        description:
            "Psychiatric diagnostic evaluation with medical services. This code is similar to 90791 but includes an evaluation of the patient's medical history and physical health status in addition to the psychiatric assessment. It is often used when the evaluation is conducted by a psychiatrist who is also providing medical management or when medical issues may be contributing to the patient's mental health symptoms.",
    },
    {
        code: "90785",
        description:
            "Interactive complexity. This code is used in conjunction with psychiatric diagnostic evaluation codes (90791 or 90792) when the evaluation involves additional complexities that require increased clinical attention. This may include factors such as communication barriers, high emotional intensity, or involvement of multiple parties (e.g., family members, caregivers) in the evaluation process.",
    },
    {
        code: "90832",
        description:
            "This code is used for individual psychotherapy, typically lasting 30 minutes. It covers face-to-face sessions between a therapist and a patient, during which therapeutic techniques are employed to address mental health concerns.",
    },
    {
        code: "90833",
        description:
            "This code is an add-on used with primary or other CPT codes to indicate an additional 30 minutes of psychotherapy provided beyond the typical session duration. It is typically used when therapy sessions exceed the standard 30-minute, 45-minute, or 60-minute durations.",
    },
    {
        code: "90834",
        description:
            "Similar to 90832, this code also covers individual psychotherapy sessions. However, it is for sessions lasting 45 minutes, indicating a longer duration of therapy.",
    },
    {
        code: "90836",
        description:
            "Similar to 90833, this add-on code indicates an additional 45 minutes of psychotherapy provided beyond the typical session duration. It is used in conjunction with primary or other CPT codes to bill for longer therapy sessions.",
    },
    {
        code: "90837",
        description:
            "This code is for individual psychotherapy sessions lasting 60 minutes. It is used when therapy sessions extend beyond the typical 45-minute duration, providing additional time for in-depth exploration and intervention.",
    },
    {
        code: "90847",
        description:
            "This code is used for family psychotherapy sessions. It involves psychotherapeutic interventions with multiple family members present, addressing family dynamics, communication patterns, and interpersonal relationships.",
    },
    {
        code: "90846",
        description:
            "This code is used for family psychotherapy without the patient present. It covers sessions in which the therapist works with family members but the identified patient is not present, often to address family issues or dynamics that may be impacting the patient's mental health.",
    },
    {
        code: "90853",
        description:
            "This code is for group psychotherapy sessions. It involves therapeutic interventions conducted in a group setting with multiple participants, allowing for peer support, feedback, and interpersonal learning.",
    },
    {
        code: "90839",
        description:
            "This code is used for crisis psychotherapy sessions. It covers psychotherapy services provided during a crisis or emergency situation, typically involving imminent risk of harm to the patient or others.",
    },
    {
        code: "90840",
        description:
            "This code is used for crisis psychotherapy sessions lasting longer than the typical session duration. It indicates extended psychotherapy services provided during a crisis or emergency situation, often requiring more intensive intervention and support.",
    },
];

interface MentalHealthIssue {
    name: string;
    description: string;
}
const mentalHealthIssues: MentalHealthIssue[] = [
    {
        name: "Depression",
        description: "Persistent feelings of sadness, hopelessness, and loss of interest in activities.",
    },
    {
        name: "Anxiety Disorders",
        description: "Generalized Anxiety Disorder (GAD), Panic Disorder, Social Anxiety Disorder, and specific phobias.",
    },
    {
        name: "Trauma and Post-Traumatic Stress Disorder (PTSD)",
        description: "Resulting from experiences such as accidents, abuse, combat, or other traumatic events.",
    },
    {
        name: "Obsessive-Compulsive Disorder (OCD)",
        description: "Characterized by intrusive, repetitive thoughts (obsessions) and/or compulsive behaviors.",
    },
    {
        name: "Substance Use Disorders",
        description: "Addiction to substances such as alcohol, drugs, or prescription medications.",
    },
    {
        name: "Eating Disorders",
        description: "Including Anorexia Nervosa, Bulimia Nervosa, and Binge Eating Disorder.",
    },
    {
        name: "Personality Disorders",
        description: "Such as Borderline Personality Disorder (BPD), Narcissistic Personality Disorder (NPD), and Avoidant Personality Disorder (AvPD).",
    },
    {
        name: "Relationship Issues",
        description: "Difficulties in interpersonal relationships, marital conflicts, family issues, or difficulties forming and maintaining relationships.",
    },
    {
        name: "Stress Management",
        description: "Coping with stressors related to work, family, relationships, or life transitions.",
    },
    {
        name: "Self-Esteem Issues",
        description: "Feelings of inadequacy, low self-worth, or a negative self-concept.",
    },
    {
        name: "Grief and Loss",
        description: "Dealing with the death of a loved one, divorce, or other significant losses.",
    },
    {
        name: "Sexual Issues",
        description: "Such as low libido, sexual dysfunction, or difficulties with sexual identity or orientation.",
    },
    {
        name: "Childhood Behavioral Issues",
        description: "Addressing behavioral problems or emotional disturbances in children and adolescents.",
    },
    {
        name: "Adjustment Disorders",
        description: "Difficulty coping with major life changes, such as relocation, job loss, or illness.",
    },
    {
        name: "Anger Management",
        description: "Difficulty controlling anger or expressing it in a healthy manner.",
    },
];

interface ComplianceRequirement {
    title: string;
    description: string;
}
const complianceRequirements: ComplianceRequirement[] = [
    {
        title: "Medical Records Required",
        description: "As per the Handbook for Providers of Medical Services (Chapter 100 - General Policy and Procedure, Page 47), all required records must be available for inspection, audit, and copying (including photocopying) by authorized Department personnel or designees during normal business hours. Such personnel or designees may include, but are not limited to, the Department’s Office of Inspector General, representatives of the Medicaid Fraud Control Unit, law enforcement personnel, the Office of the Auditor General, and the federal Centers for Medicare and Medicaid Services (CMS).",
    },
    {
        title: "Conflicting Service/Billing Provider",
        description: "The Billing NPI (formerly referred to as Payee NPI) must be reported in loop 2010AA, and the Rendering Provider NPI must be entered in loop 2310B, Rendering Provider.",
    },
    {
        title: "Incorrect or Unlikely Number of Units",
        description: "Behavioral Health services must meet specific requirements for reimbursement. Documented services must:\n- Meet the State’s Medicaid program rules.\n- Reflect medical necessity and justify the treatment and clinical rationale as required under State law.\n- Reflect active treatment as required under State law.\n- Be complete, concise, and accurate, including the face-to-face time spent with the patient.\n- Be legible, signed, and dated.\n- Be maintained and available for review.\n- Be coded correctly for billing purposes.",
    },
    {
        title: "Incomplete or Invalid Documentation",
        description: "Documentation to support services provided for which reimbursement is claimed shall be in the format specified by the public payer and must be legible.",
    },
    {
        title: "Documentation Does Not Support the Telemedicine Service/Modifier Billed",
        description: "Effective with dates of service beginning October 1, 2021, providers billing a service performed via audio or video communication must append the procedure code with modifier GT and use Place of Service Code 02.",
    },
    {
        title: "Timely Signature",
        description: "Behavioral health practitioners are committed to helping their patients. Meeting ongoing patient needs, such as furnishing and coordinating necessary services, is impossible without documenting each patient encounter completely, accurately, and in a timely manner.",
    },
];



export const PsychotherapyContent = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center justify-center py-10 md:py-24 lg:w-10/12">
                <div className="w-[200px] md:w-full flex justify-center items-center">
                    <img src={doctor} width={500} height={500} alt="" />
                </div>
                <p className="text-xl text-center">
                    Psychotherapy Provides a safe and confidential Space for individuals to explore and understand their thoughts, emotions, and behaviours. It offers evidence-based techniques to address mental health concerns, promote self-awareness, and develop coping strategies.
                </p>
            </div>
            <div className="lg:w-10/12 text-xl">
                <div className="bg-gradient-to-r from-[#4A90E2] to-[#59B179] py-4 text-center">
                    <h2 className="text-2xl md:text-3xl px-5 font-bold underline text-white">
                        Important Steps While Billing for Psychotherapy Sessions
                    </h2>
                </div>
                <div className="flex flex-col gap-1 py-7 px-5 md:px-0">
                    <p>
                        1. Proper and Timely Documentation.
                    </p>
                    <p>
                        2. Billing within a Set Time Frame to Avoid Delays in Payments.
                    </p>
                    <p>
                        3. Specifying the Use of CPT Codes for Different Therapist Specialties.
                    </p>
                    <p>
                        4. Use of Modifiers.

                    </p>
                    <p>
                        5. Educating Providers and the Coding Team to Stay Updated with State and Federal Requirements for Psychotherapy.
                    </p>
                    <div className="w-[200px] md:w-full flex justify-center items-center">
                        <img src={doctorandtable} width={500} height={500} alt="" />
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#4A90E2] to-[#59B179] py-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold underline text-white">
                        Roles and Responsibilities
                    </h2>
                </div>
                <div className="flex flex-col gap-7">
                    <ul className="list-disc flex flex-col gap-10 py-10 px-5 md:px-0">
                        <li className="ml-4">
                            <span className="font-semibold">Provider:</span><br /> As a provider, the facility must implement a standardized format for documenting therapy sessions to prevent denials and recoupments. Therapists should be thoroughly educated by the billing and office managers on any updates and changes to documentation requirements. Documentation is a critical and impactful aspect of psychotherapy billing

                        </li>
                        <li className="ml-4">
                            <span className="font-semibold">Coders and Billers</span> As coders and billers, we understand and acknowledge our responsibility in revenue generation and the smooth operation of the practice. We ensure that all sessions are documented in compliance with state requirements. All coding elements outlined in CMS guidelines are present in the documentation. Our expert team of billers and AR associates ensures that claims are submitted in a timely manner and payments are accurately organized, posted, and documented in the EMR/PMS software.
                        </li>
                    </ul>
                </div>
                <div className="bg-gradient-to-r from-[#4A90E2] to-[#59B179] py-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold underline text-white">
                        Psychotherapy CPT Codes
                    </h2>
                    <p className="text-xl text-white mt-4">

                        All rights to the Current Procedural Terminology (CPT) codes are reserved by the American Medical Association (AMA).
                    </p>
                </div>
                <div className="flex flex-col gap-7">
                    <ul className="list-disc flex flex-col gap-10 py-10 px-5 md:px-0">
                        {psychotherapyCodes.map((code) => (
                            <li key={code.code} className="ml-5">

                                <h3 className="font-bold">{code.code}</h3>
                                <p>{code.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-gradient-to-r from-[#4A90E2] to-[#59B179] py-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold underline text-white">
                        Psychotic Problems and Diagnosis
                    </h2>
                </div>
                <div className="flex flex-col gap-7">
                    <p className="text-center my-10">
                        In psychotherapy, clients seek help for a wide range of issues and diagnoses. Some common problems or diagnoses individuals seek psychotherapy for include:
                    </p>
                    <ul className="list-disc flex flex-col px-5 md:px-0">
                        {mentalHealthIssues.map((issue) => (
                            <li key={issue.name} className="mb-4 ml-5">
                                <p>
                                    <span className="font-bold">{issue.name + ": "}</span>
                                    {issue.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-[200px] md:w-full flex justify-center items-center">
                    <img src={sickman} width={500} height={500} alt="" />
                </div>
                <div className="bg-gradient-to-r from-[#4A90E2] to-[#59B179] py-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold underline text-white">
                        Common Reason for Disallowed Claims
                    </h2>
                </div>
                <ul className="list-decimal my-10">
                    {complianceRequirements.map((requirement) => (
                        <li key={requirement.title} className="mb-6 ml-5">
                            <h3 className="font-bold text-lg">{requirement.title}</h3>
                            <p className="text-gray-600">{requirement.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-gradient-to-r from-[#4A90E2] to-[#59B179] py-20 text-center w-full">
                <div className="px-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Maximize Your Revenue with MedyMatic Business Solutions
                    </h2>
                    <p className="text-2xl text-white">
                        With Expertise and knowledge, and cost effective services. MedyMatic is a partner you can trust for your Behavioral Health Practice.
                    </p>
                </div>
            </div>

        </section >
    )
}