import { clsx } from "clsx"
import slugify from "slugify";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function getSlug(title) {
    const slug = slugify(title, {
      lower: true,
      remove: /[*+~,.()'"!:@]/g,
    });
    return slug;
}

export function truncateDescription  (desc, wordLimit) {
    const words = desc.split(" ");
    return (
      words.slice(0, wordLimit).join(" ") +
      (words.length > wordLimit ? "..." : "")
    );
  };

export function isEventPast(eventDate) {
  if (!eventDate) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day
  
  const eventDateTime = new Date(eventDate);
  eventDateTime.setHours(0, 0, 0, 0); // Reset time to start of day
  
  return eventDateTime < today;
}
