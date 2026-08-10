const apiBase = (import.meta.env.VITE_API_URL || "https://medymatic-backend.onrender.com").replace(/\/$/, "");

export type ApiResponse = {
  ok: boolean;
  message: string;
  fields?: string[];
};

export async function submitApiForm(
  path: string,
  form: HTMLFormElement,
  multipart = false,
): Promise<ApiResponse> {
  const formData = new FormData(form);
  const response = await fetch(`${apiBase}/api/v1/${path}`, {
    method: "POST",
    headers: multipart ? undefined : { "Content-Type": "application/json" },
    body: multipart
      ? formData
      : JSON.stringify(Object.fromEntries(formData.entries())),
  });

  const payload = (await response.json().catch(() => null)) as ApiResponse | null;
  if (!response.ok) {
    throw new Error(payload?.message || "Something went wrong. Please try again.");
  }
  return payload || { ok: true, message: "Submitted successfully." };
}
