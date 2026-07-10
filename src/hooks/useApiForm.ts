import { type FormEvent, useState } from "react";
import { submitApiForm } from "../lib/api";

type Submission = {
  state: "idle" | "submitting" | "success" | "error";
  message: string;
};

export function useApiForm(path: string, options: { multipart?: boolean; onSuccess?: () => void } = {}) {
  const [submission, setSubmission] = useState<Submission>({ state: "idle", message: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmission({ state: "submitting", message: "" });

    try {
      const response = await submitApiForm(path, form, options.multipart);
      form.reset();
      options.onSuccess?.();
      setSubmission({ state: "success", message: response.message });
    } catch (error) {
      setSubmission({
        state: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    }
  };

  return { handleSubmit, submission, isSubmitting: submission.state === "submitting" };
}
