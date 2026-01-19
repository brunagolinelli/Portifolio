export interface BaseEntity {
  id: string
  createdAt?: string
  updatedAt?: string
}

export type ThemeMode = 'light' | 'dark'

export interface ApiResponse<T> {
  data: T
  message?: string
  error?: string
}

export interface NavigationItem {
  id: string
  label: string
  href: string
}

export type NavigationItems = NavigationItem[]

export interface HeroButton {
  id: string
  label: string
  href: string
  variant?: 'contained' | 'outlined' | 'text'
}

export interface HeroData {
  name: string
  role: string
  description: string
  buttons: HeroButton[]
}

export interface AboutData {
  title: string
  paragraphs: string[]
  highlights?: string[]
}

export interface Skill {
  id: string
  name: string
  icon?: string
}

export interface SkillCategory {
  id: string
  title: string
  skills: Skill[]
}

export interface SkillsData {
  title: string
  categories: SkillCategory[]
}

export type ProjectType =
  | 'sistema-corporativo'
  | 'dashboard'
  | 'interface-complexa'
  | 'migracao-web'
  | 'ux-focused'

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  type: ProjectType
  link?: string
  github?: string
  image?: string
}

export interface ProjectsData {
  title: string
  projects: Project[]
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  technologies: string[]
  responsibilities: string[]
  impact?: string[]
}

export interface ExperienceData {
  title: string
  experiences: Experience[]
}

export interface ContactItem {
  id: string
  type: 'phone' | 'email' | 'linkedin'
  label: string
  value: string
  href: string
}

export interface ContactData {
  title: string
  description?: string
  contacts: ContactItem[]
}

