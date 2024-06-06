import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  const time =
    isNaN(minutes) || isNaN(secs)
      ? '0'
      : `${minutes}:${secs < 10 ? '0' : ''}${secs}`
  return `${time}`
}