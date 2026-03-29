
export enum GalleryType {
  PHOTO_EDITING = 'photo-editing',
  VIDEO_EDITING = 'video-editing',
  BRANDING = 'branding',
  ILLUSTRATIVE = 'illustrative',
  PHOTOGRAPHY = 'photography',
  PODCASTS = 'podcasts'
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: GalleryType;
  subCategory?: string; // New: To distinguish sub-sections like Retouches vs Colors
  thumbnail: string;
  description?: string;
  // For photo editing (before/after)
  imageBefore?: string;
  imageAfter?: string;
  // For video
  videoUrl?: string;
  // For branding (carousel) or grouped projects
  images?: string[];
  items?: { title: string; thumbnail: string; videoUrl?: string }[];
  // For podcast
  audioUrl?: string;
  // Layout properties
  gridSpan?: number;
}

/**
 * Interface for technical skills used in the tech stack section.
 */
export interface Skill {
  name: string;
  level: number;
  category: 'software' | 'ai';
}

/**
 * Interface for professional work experience items.
 */
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
}
