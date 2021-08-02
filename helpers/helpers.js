export function formatPostDate(date) {
  if (typeof Date.prototype.toLocaleDateString !== "function") {
    return date
  }

  date = new Date(date)

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return date.toLocaleDateString("en-US", options)
}
