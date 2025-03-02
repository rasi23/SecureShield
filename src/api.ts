export const checkPhishing = async (url: string) => {
    const response = await fetch("/api/check-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    return response.json();
  };
  