import { useEffect, useState } from "react";
import { FileCheck2, UploadCloud, X } from "lucide-react";
import { SubmissionStatus } from "./SubmissionStatus";
import { useApiForm } from "../hooks/useApiForm";

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const { handleSubmit, submission, isSubmitting } = useApiForm("careers", {
    multipart: true,
    onSuccess: () => {
      setFileName(null);
      setExperienceLevel("");
    },
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [experienceLevel, setExperienceLevel] = useState<"experienced" | "fresher" | "">("");
  const [experienceError, setExperienceError] = useState(false);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/60 p-4 py-10"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-[0_28px_80px_rgba(15,23,42,0.25)] sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close form"
          className="focus-ring absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-brand-muted transition hover:bg-gray-100 hover:text-brand-red"
        >
          <X size={20} />
        </button>

        <h2 id="resume-modal-title" className="pr-10 text-2xl font-black text-brand-ink">
          Submit Your Resume
        </h2>
        <p className="mt-2 text-sm leading-6 text-brand-muted">
          Share your details and resume with our team. We&apos;ll reach out when a matching role
          opens up.
        </p>

        <form
          className="mt-6"
          onSubmit={(event) => {
            if (!experienceLevel) {
              event.preventDefault();
              setExperienceError(true);
              return;
            }
            handleSubmit(event);
          }}
        >
          <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
            <ModalField name="fullName" label="Full Name" placeholder="John Doe" />
            <ModalField name="email" label="Email Address" type="email" placeholder="john@example.com" />
            <ModalField name="phone" label="Phone Number" type="tel" placeholder="+1 (555) 123-4567" />
            <ModalField
              name="position"
              label="Position / Area of Interest"
              placeholder="e.g. Medical Coding"
            />
          </div>

          <fieldset className="mt-5">
            <legend className="text-sm font-bold text-brand-ink">
              Experience <span className="text-brand-red">*</span>
            </legend>
            <div className="mt-2.5 flex flex-wrap gap-4">
              <label className="flex cursor-pointer items-center gap-2 text-sm text-brand-ink">
                <input
                  type="checkbox"
                  checked={experienceLevel === "experienced"}
                  onChange={() => {
                    setExperienceLevel((current) => (current === "experienced" ? "" : "experienced"));
                    setExperienceError(false);
                  }}
                  className="focus-ring h-4 w-4 accent-brand-red"
                />
                Experienced
              </label>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-brand-ink">
                <input
                  type="checkbox"
                  checked={experienceLevel === "fresher"}
                  onChange={() => {
                    setExperienceLevel((current) => (current === "fresher" ? "" : "fresher"));
                    setExperienceError(false);
                  }}
                  className="focus-ring h-4 w-4 accent-brand-red"
                />
                Fresher
              </label>
            </div>
            {experienceError && (
              <p className="mt-2 text-xs font-semibold text-red-700">
                Please select whether you&apos;re experienced or a fresher.
              </p>
            )}
            <input type="hidden" name="experienceLevel" value={experienceLevel} />
          </fieldset>

          <div className="mt-5">
            <label htmlFor="resume" className="text-sm font-bold text-brand-ink">
              Resume Upload <span className="text-brand-red">*</span>
            </label>
            <label
              htmlFor="resume"
              className={`mt-2.5 flex min-h-20 cursor-pointer items-center justify-between gap-4 rounded-xl border px-4 py-3 transition focus-within:ring-2 focus-within:ring-brand-red focus-within:ring-offset-2 ${
                fileName
                  ? "border-brand-red bg-red-50/40"
                  : "border-dashed border-gray-300 bg-gray-50 hover:border-brand-red hover:bg-red-50/40"
              }`}
            >
              <span className="min-w-0">
                <span className="block truncate text-sm font-bold text-brand-ink">
                  {fileName ?? "Choose a file or drag it here"}
                </span>
                <span className="mt-1 block text-xs text-brand-muted">
                  {fileName ? "File selected · click to change" : "PDF, DOC, DOCX, JPG or PNG · Maximum 10MB"}
                </span>
              </span>
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl shadow-sm ${
                  fileName ? "bg-brand-red text-white" : "bg-white text-brand-red"
                }`}
              >
                {fileName ? <FileCheck2 size={20} /> : <UploadCloud size={20} />}
              </span>
              <input
                id="resume"
                name="resume"
                type="file"
                required
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="sr-only"
                onChange={(event) => setFileName(event.target.files?.[0]?.name ?? null)}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-red px-9 text-base font-black text-white transition hover:bg-red-700 sm:w-auto"
          >
            {isSubmitting ? "Sending…" : "Submit Resume"}
          </button>
          <SubmissionStatus {...submission} className="mt-4" />
        </form>
      </div>
    </div>
  );
}

type ModalFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
};

function ModalField({ name, label, placeholder, type = "text" }: ModalFieldProps) {
  return (
    <label htmlFor={name} className="block">
      <span className="text-sm font-bold text-brand-ink">
        {label} <span className="text-brand-red">*</span>
      </span>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="focus-ring mt-2.5 h-12 w-full rounded-xl border border-brand-line bg-gray-50 px-4 text-sm text-brand-ink placeholder:text-gray-400"
      />
    </label>
  );
}
