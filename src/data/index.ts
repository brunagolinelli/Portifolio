
export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

export interface Education {
  id: string
  institution: string
  course: string
  period: string
  description?: string
}

export interface Contact {
  id: string
  type: 'email' | 'phone' | 'linkedin' | 'github' | 'other'
  value: string
  label: string
}

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Projeto Exemplo',
    description: 'Descrição do projeto exemplo',
    technologies: ['React', 'TypeScript', 'Material UI'],
    link: 'https://example.com',
    github: 'https://github.com/example',
  },
]

export const mockEducation: Education[] = [
  {
    id: '1',
    institution: 'Instituição Exemplo',
    course: 'Curso Exemplo',
    period: '2020 - 2024',
    description: 'Descrição da formação',
  },
]

export const mockContacts: Contact[] = [
  {
    id: '1',
    type: 'email',
    value: 'contato@example.com',
    label: 'Email',
  },
]

export { navigationItems } from './navigation'
export { heroData } from './hero'
export { aboutData } from './about'
export { skillsData } from './skills'
export { projectsData } from './projects'
export { experienceData } from './experience'
export { contactData } from './contact'

