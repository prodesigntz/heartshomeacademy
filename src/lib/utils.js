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
