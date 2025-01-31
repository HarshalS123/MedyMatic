import { useState } from "react";
import { buttonVariants } from "./ui/button";

export const FormCareer = () => {
    const [resume, setResume] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!resume) {
            alert("Please attach a resume.");
            return;
        }

        setIsSubmitting(true);

        const formData = new FormData();
        formData.append("name", event.currentTarget.fullName.value);
        formData.append("email", event.currentTarget.email.value); // Add email field if needed
        formData.append("message", event.currentTarget.message.value);
        formData.append("resumes", resume); // Ensure the field name matches the backend

        try {
            const response = await fetch("https://medymatic-backend.onrender.com/submit-careers", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Form submitted successfully!");
            } else {
                const errorData = await response.json();
                alert(`Failed to submit form: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while submitting the form.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setResume(event.target.files[0]);
        }
    };

    return (
        <section className="py-20 px-4 md:px-28 grid grid-cols-1 lg:grid-cols-2 md:gap-10">
            <div className="pb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#004E43] mb-6">
                    Join Our Team and Take the Next Step in Your Career!
                </h2>
                <p className="text-xl mb-6">
                    Start Your Journey with MedyMatic—Where Your Skills Make a Difference.
                </p>
                <ul>
                    <a href="mailto:info@medymatic.com">
                        <li className="flex my-2 flex-row gap-2 items-center justify-start">
                            <span>
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M33.318 4C39.978 4 45 9.434 45 16.64V30.376C45 34.064 43.696 37.396 41.326 39.76C39.2 41.878 36.442 43 33.35 43H13.644C10.558 43 7.802 41.88 5.674 39.76C3.304 37.396 2 34.064 2 30.376V16.64C2 9.434 7.022 4 13.682 4H33.318ZM33.318 7H13.682C8.652 7 5 11.054 5 16.64V30.376C5 33.262 5.992 35.84 7.792 37.634C9.344 39.184 11.37 40 13.65 40H33.318C33.322 39.996 33.338 40 33.35 40C35.632 40 37.656 39.184 39.208 37.634C41.01 35.84 42 33.262 42 30.376V16.64C42 11.054 38.348 7 33.318 7ZM36.47 16.2576C36.992 16.8996 36.894 17.8436 36.252 18.3676L27.364 25.5916C26.24 26.4836 24.896 26.9296 23.554 26.9296C22.216 26.9296 20.882 26.4876 19.766 25.6036L10.796 18.3716C10.15 17.8516 10.05 16.9056 10.568 16.2616C11.09 15.6196 12.034 15.5176 12.678 16.0356L21.64 23.2596C22.766 24.1516 24.352 24.1516 25.486 23.2516L34.358 16.0396C35.002 15.5136 35.946 15.6136 36.47 16.2576Z"
                                        fill="#1A1A1A"
                                    />
                                </svg>
                            </span>
                            <span className="text-xl">info@medymatic.com</span>
                        </li>
                    </a>
                    <a href="mailto:sales@medymatic.com">
                        <li className="flex my-2 flex-row gap-2">
                            <span>
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M33.318 4C39.978 4 45 9.434 45 16.64V30.376C45 34.064 43.696 37.396 41.326 39.76C39.2 41.878 36.442 43 33.35 43H13.644C10.558 43 7.802 41.88 5.674 39.76C3.304 37.396 2 34.064 2 30.376V16.64C2 9.434 7.022 4 13.682 4H33.318ZM33.318 7H13.682C8.652 7 5 11.054 5 16.64V30.376C5 33.262 5.992 35.84 7.792 37.634C9.344 39.184 11.37 40 13.65 40H33.318C33.322 39.996 33.338 40 33.35 40C35.632 40 37.656 39.184 39.208 37.634C41.01 35.84 42 33.262 42 30.376V16.64C42 11.054 38.348 7 33.318 7ZM36.47 16.2576C36.992 16.8996 36.894 17.8436 36.252 18.3676L27.364 25.5916C26.24 26.4836 24.896 26.9296 23.554 26.9296C22.216 26.9296 20.882 26.4876 19.766 25.6036L10.796 18.3716C10.15 17.8516 10.05 16.9056 10.568 16.2616C11.09 15.6196 12.034 15.5176 12.678 16.0356L21.64 23.2596C22.766 24.1516 24.352 24.1516 25.486 23.2516L34.358 16.0396C35.002 15.5136 35.946 15.6136 36.47 16.2576Z"
                                        fill="#1A1A1A"
                                    />
                                </svg>
                            </span>
                            <span className="text-xl">sales@medymatic.com</span>
                        </li>
                    </a>
                </ul>
            </div>
            <div>
                <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
                    <label htmlFor="fullName" className="text-xl font-medium">
                        Applicant's full name*
                    </label>
                    <input
                        required
                        placeholder="Enter your full name"
                        className="text-sm text-black border border-black rounded-sm p-2"
                        name="fullName"
                        id="fullName"
                    />
                    <label htmlFor="email" className="text-xl font-medium">
                        Email*
                    </label>
                    <input
                        required
                        placeholder="Enter your email"
                        className="text-sm text-black border border-black rounded-sm p-2"
                        name="email"
                        id="email"
                        type="email"
                    />
                    <label htmlFor="message" className="text-xl font-medium">
                        Note to MedyMatic*
                    </label>
                    <textarea
                        placeholder="Write a message to MedyMatic"
                        required
                        className="text-sm text-black border border-black rounded-sm p-2"
                        rows={4}
                        name="message"
                        id="message"
                    />
                    <div className="flex flex-row items-center justify-center gap-3">
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center h-12 w-full border border-[#A5A5A5] cursor-pointer bg-gray-50"
                        >
                            <div className="flex flex-row items-center justify-center gap-2">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.125 2.625V25.375H16.1875C16.5356 25.375 16.8694 25.5133 17.1156 25.7594C17.3617 26.0056 17.5 26.3394 17.5 26.6875C17.5 27.0356 17.3617 27.3694 17.1156 27.6156C16.8694 27.8617 16.5356 28 16.1875 28H5.25C4.78587 28 4.34075 27.8156 4.01256 27.4874C3.68437 27.1593 3.5 26.7141 3.5 26.25V1.75C3.5 1.28587 3.68437 0.840753 4.01256 0.512564C4.34075 0.184375 4.78587 8.57311e-07 5.25 8.57311e-07H16.877C17.1121 -0.000231849 17.3448 0.0469115 17.5613 0.138616C17.7778 0.230321 17.9736 0.364707 18.137 0.533751L24.0082 6.61675C24.3237 6.94306 24.5 7.37916 24.5 7.833V10.9375C24.5 11.2856 24.3617 11.6194 24.1156 11.8656C23.8694 12.1117 23.5356 12.25 23.1875 12.25C22.8394 12.25 22.5056 12.1117 22.2594 11.8656C22.0133 11.6194 21.875 11.2856 21.875 10.9375V10.5H17.0625C16.2503 10.5 15.4713 10.1773 14.897 9.60301C14.3227 9.02868 14 8.24973 14 7.4375V2.625H6.125ZM16.625 2.7475L21.574 7.875H17.0625C16.9465 7.875 16.8352 7.82891 16.7531 7.74686C16.6711 7.66481 16.625 7.55353 16.625 7.4375V2.7475ZM22.75 26.25C22.4019 26.25 22.0681 26.1117 21.8219 25.8656C21.5758 25.6194 21.4375 25.2856 21.4375 24.9375V22.3125H18.8125C18.4644 22.3125 18.1306 22.1742 17.8844 21.9281C17.6383 21.6819 17.5 21.3481 17.5 21C17.5 20.6519 17.6383 20.3181 17.8844 20.0719C18.1306 19.8258 18.4644 19.6875 18.8125 19.6875H21.4375V17.0625C21.4375 16.7144 21.5758 16.3806 21.8219 16.1344C22.0681 15.8883 22.4019 15.75 22.75 15.75C23.0981 15.75 23.4319 15.8883 23.6781 16.1344C23.9242 16.3806 24.0625 16.7144 24.0625 17.0625V19.6875H26.6875C27.0356 19.6875 27.3694 19.8258 27.6156 20.0719C27.8617 20.3181 28 20.6519 28 21C28 21.3481 27.8617 21.6819 27.6156 21.9281C27.3694 22.1742 27.0356 22.3125 26.6875 22.3125H24.0625V24.9375C24.0625 25.2856 23.9242 25.6194 23.6781 25.8656C23.4319 26.1117 23.0981 26.25 22.75 26.25Z"
                                        fill="black"
                                    />
                                </svg>
                                <p className="text-sm text-black">
                                    Attach Resume* [PDF/Word Format]
                                </p>
                            </div>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                required
                            />
                        </label>
                        <button
                            type="submit"
                            className={`border ${buttonVariants({
                                variant: "secondary",
                                size: "lg",
                            })}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};