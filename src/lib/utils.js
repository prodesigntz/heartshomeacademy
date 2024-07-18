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