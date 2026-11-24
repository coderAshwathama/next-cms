export default function dateFormat(dateString) {
  if (dateString instanceof Date) {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } else {
    return "Date Not Found";
  }
}
