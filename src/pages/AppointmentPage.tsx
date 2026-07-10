import { CalendarDays } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionHeader } from "../components/SectionHeader";
import { SubmissionStatus } from "../components/SubmissionStatus";
import { useApiForm } from "../hooks/useApiForm";

const appointmentFields = [
  { name: "fullName", label: "Full name", type: "text" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "email", label: "Email", type: "email" },
  { name: "preferredDate", label: "Preferred date", type: "date" },
  { name: "department", label: "Department", type: "text" },
  { name: "doctor", label: "Doctor", type: "text" },
];

export function AppointmentPage() {
  const { handleSubmit, submission, isSubmitting } = useApiForm("appointments");

  return (
    <>
      <PageHero
        eyebrow="Appointment"
        title="Schedule a conversation with our team."
        text="Share your preferred date and contact details, and our team will follow up to confirm your request."
        image="/figma-image-5.png"
      />
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Book visit"
            title="Appointment request"
            text="Complete the form and we’ll contact you to confirm availability and next steps."
          />
          <form className="rounded-lg border border-brand-line bg-white p-6 shadow-card" onSubmit={handleSubmit}>
            <div className="flex items-center gap-3 border-b border-brand-line pb-5">
              <CalendarDays className="text-brand-red" size={28} />
              <h2 className="text-xl font-black">Patient details</h2>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {appointmentFields.map((field) => (
                <label key={field.name} className="block">
                  <span className="text-sm font-bold text-brand-ink">{field.label}</span>
                  <input
                    name={field.name}
                    type={field.type}
                    required
                    className="focus-ring mt-2 h-12 w-full rounded-md border border-brand-line px-3"
                  />
                </label>
              ))}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="focus-ring mt-6 rounded-md bg-brand-red px-5 py-3 text-sm font-bold text-white hover:bg-red-700"
            >
              {isSubmitting ? "Sending…" : "Request appointment"}
            </button>
            <SubmissionStatus {...submission} className="mt-4" />
          </form>
        </div>
      </section>
    </>
  );
}
