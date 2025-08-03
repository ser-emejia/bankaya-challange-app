export function formatDescription(description: string) {
  if (!description || typeof description !== "string") {
    return "No description available";
  }

  return description
    .replace(/\f/g, " ")
    .replace(/\n/g, " ")
    .replace(/\r/g, " ")
    .replace(/\v/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
