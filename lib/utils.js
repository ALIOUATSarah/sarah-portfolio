/**
 * Combines multiple class names into a single string, filtering out any falsy values.
 * This is used for conditional class application in components.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}