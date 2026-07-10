type SubmissionStatusProps = {
  state: "idle" | "submitting" | "success" | "error";
  message: string;
  className?: string;
};

export function SubmissionStatus({ state, message, className = "" }: SubmissionStatusProps) {
  if (!message || state === "idle" || state === "submitting") return null;

  return (
    <p
      role={state === "error" ? "alert" : "status"}
      className={`text-sm font-semibold ${state === "error" ? "text-red-700" : "text-green-700"} ${className}`}
    >
      {message}
    </p>
  );
}
