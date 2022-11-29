/**
 * Format date to MMM YYYY
 * example: December 1974
 *
 * @param  {string} date
 */
export function formatDate(date?: string | Date) {
  const parsed = date ? new Date(date) : new Date();
  return parsed.toLocaleDateString("en-US", {
    day: "2-digit",
    year: "numeric",
    month: "long",
  });
}

/**
 * Subtract date by given dates
 */
export function subtractDate(days: number, date?: string | Date) {
  if (!date) {
    date = new Date();
  }

  const parsed = date ? new Date(date) : new Date();
  parsed.setDate(parsed.getDate() - days);
  return parsed;
}
