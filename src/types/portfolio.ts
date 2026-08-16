export interface SocialLinks {
  googleScholar?: string;
  orcid?: string;
  github?: string;
  linkedin?: string;
  researchGate?: string;
  twitter?: string;
  email: string;
}

export interface HeroInfo {
  name: string;
  title: string;
  subtitle: string;
  institution: string;
  department: string;
  tagline: string;
  bioBrief: string;
  avatarUrl: string;
  cvUrl: string;
  socials: SocialLinks;
  highlights: { label: string; value: string }[];
}

export interface AcademicEducation {
  degree: string;
  field: string;
  institution: string;
  year: string;
  thesis?: string;
  advisor?: string;
  description?: string;
}

export interface Experience {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  type: 'academic' | 'industry' | 'research';
}

export interface AboutInfo {
  biography: string[];
  education: AcademicEducation[];
  experience: Experience[];
  skills: {
    category: string;
    items: string[];
  }[];
}

export interface ResearchArea {
  id: string;
  title: string;
  icon: string;
  summary: string;
  description: string;
  topics: string[];
}

export interface ResearchProject {
  id: string;
  title: string;
  areaId: string;
  status: 'ongoing' | 'completed';
  period: string;
  role: string;
  funding?: string;
  summary: string;
  outcomes: string[];
  collaborators: string[];
  link?: string;
}

export interface ResearchImpact {
  citationsTotal: number;
  hIndex: number;
  i10Index: number;
  grantsSecured: string;
  collaboratingInstitutions: number;
  peerReviews: number;
}

export interface ResearchSectionData {
  areas: ResearchArea[];
  projects: ResearchProject[];
  impact: ResearchImpact;
}

export type PublicationCategory = 'journal' | 'conference' | 'book' | 'workshop' | 'preprint';

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: PublicationCategory;
  doi?: string;
  pdfUrl?: string;
  codeUrl?: string;
  slidesUrl?: string;
  citations: number;
  abstract: string;
  bibtex: string;
  tags: string[];
  featured?: boolean;
}

export interface CourseModule {
  title: string;
  duration: string;
  lessons: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  type: 'free' | 'paid';
  price: string;
  originalPrice?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  studentsEnrolled: number;
  rating: number;
  thumbnail: string;
  previewVideoUrl?: string;
  summary: string;
  description: string;
  learningOutcomes: string[];
  prerequisites: string[];
  curriculum: CourseModule[];
  buyUrl: string;
  freeAccessUrl?: string;
  certificate: boolean;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  degreeTrack?: string;
  avatar: string;
  bio: string;
  researchFocus: string[];
  email: string;
  socials?: {
    github?: string;
    linkedin?: string;
    website?: string;
    googleScholar?: string;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Award' | 'Conference' | 'Grant' | 'Publication' | 'Media' | 'General';
  summary: string;
  link?: string;
  image?: string;
}

export interface CodeProject {
  id: string;
  title: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  paperUrl?: string;
  featured?: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  event: string;
  date: string;
  type: 'Keynote' | 'Lecture' | 'Tutorial' | 'Paper Presentation' | 'Workshop';
  embedUrl: string;
  thumbnail: string;
  duration: string;
  description: string;
  slidesUrl?: string;
}

export interface ContactDetails {
  email: string;
  office: string;
  building: string;
  institution: string;
  address: string;
  officeHours: string;
  mapEmbedUrl: string;
}

export interface PortfolioData {
  hero: HeroInfo;
  about: AboutInfo;
  research: ResearchSectionData;
  publications: Publication[];
  courses: Course[];
  team: TeamMember[];
  news: NewsItem[];
  codeProjects: CodeProject[];
  videos: VideoItem[];
  contact: ContactDetails;
}
