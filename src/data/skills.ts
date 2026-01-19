import { SkillsData } from '@/types'

export const skillsData: SkillsData = {
  title: 'Skills',
  categories: [
    {
      id: 'frontend',
      title: 'Frontend',
      skills: [
        { id: 'react', name: 'React' },
        { id: 'angular', name: 'Angular' },
        { id: 'vue', name: 'Vue' },
        { id: 'typescript', name: 'TypeScript' },
      ],
    },
    {
      id: 'ui-ux',
      title: 'UI/UX',
      skills: [
        { id: 'figma', name: 'Figma' },
        { id: 'css', name: 'CSS' },
        { id: 'sass', name: 'SASS' },
      ],
    },
    {
      id: 'qualidade',
      title: 'Qualidade',
      skills: [
        { id: 'testes-unidade', name: 'Testes de Unidade' },
        { id: 'codigo-limpo', name: 'Código Limpo' },
      ],
    },
    {
      id: 'outros',
      title: 'Outros',
      skills: [
        { id: 'nodejs', name: 'Node.js' },
        { id: 'docker', name: 'Docker' },
        { id: 'git', name: 'Git' },
        { id: 'metodologias-ageis', name: 'Metodologias Ágeis' },
      ],
    },
  ],
}

