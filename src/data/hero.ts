import { HeroData } from '@/types'

export const heroData: HeroData = {
  name: 'Bruna Nallis',
  role: 'Desenvolvedora Web Frontend',
  description:
    'Especialista em desenvolvimento frontend com experiência em Angular, React e Vue. Apaixonada por criar interfaces elegantes e experiências de usuário excepcionais.',
  buttons: [
    {
      id: 'ver-projetos',
      label: 'Ver Projetos',
      href: '#projetos',
      variant: 'contained',
    },
    {
      id: 'entrar-contato',
      label: 'Entrar em Contato',
      href: '#contato',
      variant: 'outlined',
    },
  ],
}

