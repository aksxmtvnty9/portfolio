import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes with conflict resolution
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date to readable string
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
  }).format(date);
}

// Calculate reading time
export function readingTime(html: string): string {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / 200);
  return `${readingTimeMinutes} min read`;
}

// Format date range
export function dateRange(startDate: Date, endDate?: Date | string): string {
  const start = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
  }).format(startDate);

  const end =
    endDate instanceof Date
      ? new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
        }).format(endDate)
      : endDate || "Current";

  return `${start} - ${end}`;
}
