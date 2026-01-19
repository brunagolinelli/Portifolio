import { ContactData } from '@/types'

export const contactData: ContactData = {
  title: 'Contato',
  description: 'Entre em contato comigo através dos canais abaixo. Estou sempre aberta para novas oportunidades e projetos interessantes.',
  contacts: [
    {
      id: 'phone',
      type: 'phone',
      label: 'Telefone',
      value: '+55 16 98823-6657',
      href: 'tel:+5516988236657',
    },
    {
      id: 'email',
      type: 'email',
      label: 'E-mail',
      value: 'bruna.gnallis@gmail.com',
      href: 'mailto:bruna.gnallis@gmail.com',
    },
    {
      id: 'linkedin',
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/bruna-g-nallis',
      href: 'https://linkedin.com/in/bruna-g-nallis',
    },
  ],
}

