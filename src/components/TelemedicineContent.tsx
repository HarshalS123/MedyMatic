import doctor from "@/assets/Doctor.png"
import guyandmedicines from "@/assets/guyandmedicines.png"
import { buttonVariants } from "./ui/button"
export const TelemedicineContent = () => {
    return (
        <section className="container flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center py-10 md:py-24 lg:w-10/12">
                <div className="w-[200px] md:w-full flex justify-center items-center">
                    <img src={doctor} width={500} height={500} alt="" />
                </div>
                <p className="text-xl text-center">
                    Telehealth enables remote medical care through secure virtual tools, offering accessible and convenient healthcare anytime, anywhere.
                </p>
            </div>
            <div className="w-screen lg:w-10/12 text-xl">
                <div className="bg-gradient-to-r from-[#4A90E2] to-[#59B179] py-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold underline text-white">
                        Benefits of Telehealth Management
                    </h2>
                </div>
                <div className="flex flex-col gap-7 py-7 px-4 md:px-0">
                    <div>
                        <span className="font-semibold">1. Virtual Consultations:</span> Patients can consult with healthcare providers remotely to discuss symptoms, receive medical advice, and obtain prescriptions or referrals.
                    </div>
                    <div>
                        <span className="font-semibold">2. Remote Monitoring:</span> Patients with chronic conditions or those recovering from surgery can be monitored remotely using connected devices to track vital signs, symptoms, and medication adherence.
                    </div>
                    <div>
                        <span className="font-semibold">3. Telepsychiatry and Counseling</span>: Mental health professionals provide therapy, counseling, and psychiatric evaluations remotely, making mental health services more accessible to individuals in need.
                    </div>
                    <div>
                        <span className="font-semibold">4. Specialty Consultations:</span> Patients can receive consultations with specialists in various fields—such as cardiology, dermatology, neurology, and oncology—without the need for travel.

                    </div>
                    <div>
                        <span className="font-semibold">5. Follow-up Care:</span> Telemedicine facilitates follow-up appointments and routine check-ups remotely, improving continuity of care and reducing the need for frequent visits to healthcare facilities.
                    </div>
                    <div className="w-[200px] md:w-full flex justify-center items-center">
                        <img src={guyandmedicines} width={500} height={500} alt="" />
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#4A90E2] to-[#59B179] py-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold underline text-white">
                        Effects of Telemedicine on Behavioral Health
                    </h2>
                </div>
                <div className="flex flex-col gap-7 py-7 px-4 md:px-0">
                    <div>
                        <span className="font-semibold">1. Increased Access to Care:</span> Telehealth has improved access to behavioral health services, especially in rural or underserved areas where mental health providers may be limited. Through telehealth, patients can connect with therapists, counselors, and psychiatrists remotely, overcoming barriers to treatment.

                    </div>
                    <div>
                        <span className="font-semibold">2. Convenience:</span> Telehealth offers convenience for both patients and providers. Patients can attend therapy or counseling sessions from the comfort of their homes, eliminating travel and saving time. This ease of access can lead to better engagement and adherence to treatment plans.

                    </div>
                    <div>
                        <span className="font-semibold">3. Reduced Stigma:</span>: For some, the stigma around seeking mental health treatment can prevent them from getting help. Telehealth offers a more private and discreet way to receive therapy, which may reduce stigma and encourage more individuals to seek care.
                    </div>
                    <div>
                        <span className="font-semibold">4. Continuity of Care:</span> Telehealth ensures more consistent and continuous care, allowing patients to easily connect with their mental health providers for follow-up appointments and ongoing support. This is especially beneficial for those with chronic mental health conditions who require regular monitoring and intervention.

                    </div>
                    <div>
                        <span className="font-semibold">5. Enhanced Collaboration:</span> Telehealth promotes better collaboration among a patient's care team, including therapists, psychiatrists, primary care providers, and specialists. Virtual consultations and shared electronic health records enable providers to work together more effectively, developing comprehensive treatment plans and coordinating care.
                    </div>
                    <div>
                        <span className="font-semibold">6. Crisis Intervention:</span> Telehealth can also be used for crisis intervention and suicide prevention. Hotlines and crisis centers can provide remote support and counseling, offering immediate assistance to individuals in crisis.
                    </div>
                    <div className="flex flex-col gap-2  items-center justify-center">
                        <a
                            rel="noreferrer noopener"
                            href="/assets/TeleHealth Billing Guidelines.xlsx"
                            download
                            className={`border w-full ${buttonVariants({ size: "lg" })}`}
                        >
                            <svg width="18" height="18" className="mr-2" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.333 11.5H20.9997V0.5H9.99967V11.5H2.66634L15.4997 26.1667L28.333 11.5ZM0.833008 29.8333H30.1663V33.5H0.833008V29.8333Z" fill="white" />
                            </svg>

                            Download TeleHealth Billing Guidelines (xlsx)
                        </a>
                    </div>
                    <div className="border-t border-black py-10 my-5">
                        <p className=" text-justify">
                            With extensive expertise and a dedicated focus on telemedicine billing, our company is well-equipped to navigate the complexities of billing and reimbursement in the telehealth landscape. Our team of seasoned professionals has in-depth knowledge of telemedicine billing codes, regulations, and payer policies, allowing us to maximize revenue and streamline the billing process for our clients. We prioritize accuracy, compliance, and timely reimbursement. By staying up-to-date with industry changes, we continuously adapt our strategies to meet the evolving needs of both our clients and the telemedicine industry. Our commitment to excellence and client satisfaction is reflected in our unparalleled service, helping healthcare providers optimize revenue while delivering high-quality care to patients remotely.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}