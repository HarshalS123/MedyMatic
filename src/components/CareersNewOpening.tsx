export const CareersNewOpening = () => {
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="py-20 flex flex-col items-center justify-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#007A59] mb-4">Current Openings</h2>
                <ul className="text-center flex flex-col gap-1 text-xl w-11/12">
                    <li>• Medical Billing Specialist</li>
                    <li>• Revenue Cycle Analyst</li>
                    <li>• Payer Call Center Representative</li>
                    <li>• Rejection Management Specialist</li>
                    <li>
                        • Customer Support Specialist <span>(Chat Support)</span>
                    </li>
                </ul>

            </div>
            <div className="bg-[#E8FFF0] mb-10">
                <div className="py-20 flex flex-col items-center justify-center px-20">
                    <h2 className="text-[#007A59] text-2xl md:text-3xl font-semibold mb-4">How to Apply?</h2>
                    <p className="text-xl text-center">
                        Ready to take the next step in your career? Submit your resume and a cover letter to {" [insert email] "} or fill out the <a href="/careerform" className="underline">application form here.</a> We look forward to hearing from you and learning how you can contribute to our continued success!
                    </p>
                </div>

            </div>
        </section>
    )
}