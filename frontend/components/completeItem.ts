export async function createItem(title: string, details: string) {
  return (
    await fetch(window.location.origin + "/api/complete", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, details: details }),
    })
  ).json();
}
