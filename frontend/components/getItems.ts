export async function getItems() {
  return (
    await fetch(window.location.origin + "/api/get", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
  ).json();
}
