import { useState } from "react";
import { buttonVariants } from "./ui/button";

export const FormClientSupport = () => {
  const [supportingDocs, setSupportingDocs] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!supportingDocs) {
      alert("Please attach supporting documents.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", event.currentTarget.fullName.value);
    formData.append("clientId", event.currentTarget.clientid.value);
    formData.append("email", event.currentTarget.email.value);
    formData.append("issueType", event.currentTarget.issuetype.value);
    formData.append("message", event.currentTarget.message.value);
    formData.append("supportingDocs", supportingDocs); // Ensure the field name matches the backend

    try {
      const response = await fetch("https://medymatic-backend.onrender.com/submit-client-support", {
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
      setSupportingDocs(event.target.files[0]);
    }
  };

  return (
    <section className="py-20 px-10 md:px-48 md:gap-10">
      <div>
        <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          <label htmlFor="fullName" className="text-xl font-medium">
            Full Name*
          </label>
          <input
            required
            placeholder="Enter your full name"
            className="text-sm text-black border border-black rounded-sm p-2"
            name="fullName"
            id="fullName"
          />
          <label htmlFor="clientid" className="text-xl font-medium">
            Client ID
          </label>
          <input
            placeholder="Enter your Client ID"
            className="text-sm text-black border border-black rounded-sm p-2"
            name="clientid"
            id="clientid"
          />
          <label htmlFor="email" className="text-xl font-medium">
            Email*
          </label>
          <input
            required
            placeholder="Enter your email address"
            className="text-sm text-black border border-black rounded-sm p-2"
            name="email"
            id="email"
            type="email"
          />
          <label htmlFor="issuetype" className="text-xl font-medium">
            Issue Type*
          </label>
          <input
            required
            placeholder="Enter your issue"
            className="text-sm text-black border border-black rounded-sm p-2"
            name="issuetype"
            id="issuetype"
          />
          <label htmlFor="message" className="text-xl font-medium">
            Brief Description*
          </label>
          <textarea
            placeholder="Describe your issue briefly"
            required
            className="text-sm text-black border border-black rounded-sm p-2"
            rows={4}
            name="message"
            id="message"
          />
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center h-12 px-2 w-full border border-[#A5A5A5] cursor-pointer bg-gray-50"
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
                  Attach supporting documents (PNG, JPG, PDF)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept=".png,.jpg,.jpeg,.pdf"
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