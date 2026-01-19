import { ProjectsData } from '@/types'

export const projectsData: ProjectsData = {
  title: 'Projetos',
  projects: [
    {
      id: 'pokedex',
      title: 'Pokedex',
      description:
        'Aplicação web completa para explorar e gerenciar Pokémons. Página Home exibe os 20 primeiros pokémons da Pokédex com cards interativos. Cada card possui botões para ver detalhes ou adicionar à Pokédex pessoal. Página de Detalhes mostra fotos, status, tipos e movimentos do pokémon. Página Pokédex permite visualizar e gerenciar os pokémons selecionados, com opção de remoção. Desenvolvido com integração à Poké API, custom hooks para gerenciamento de estado e interface responsiva.',
      technologies: [
        'React',
        'Axios',
        'Styled Components',
        'Material UI',
        'Poké API',
        'Custom Hooks',
        'React Spinners',
      ],
      type: 'interface-complexa',
      link: 'http://tense-owner.surge.sh/',
    },
    {
      id: 'labecommerce',
      title: 'LabeCommerce',
      description:
        'Projeto básico de e-commerce desenvolvido em React que demonstra funcionalidades essenciais de um carrinho de compras online. A aplicação permite adicionar e remover itens do carrinho, filtrar produtos por faixa de preço e busca por nome, ordenar produtos em ordem crescente ou decrescente de preço, com atualização em tempo real da interface. Projeto organizado seguindo princípios SOLID, com componentes independentes e separação entre lógica de negócios e apresentação. Interface intuitiva, funcional e totalmente responsiva.',
      technologies: ['React', 'Styled Components'],
      type: 'interface-complexa',
      link: 'https://cumbersome-slope.surge.sh/',
    },
    {
      id: 'hamburgueria',
      title: 'Hamburgueria',
      description:
        'Simulador de cardápio online projetado para replicar a experiência de um cardápio de lanchonete de forma virtual. Plataforma inovadora que permite aos usuários realizar pedidos de maneira conveniente e acompanhar todo o processo de forma intuitiva. A aplicação demonstra o uso harmonioso de tecnologias modernas como Vue 3, JavaScript e JSON Server para criar uma interface responsiva e de fácil utilização, redefinindo a maneira como interagimos com cardápios de lanchonetes.',
      technologies: ['Vue 3', 'JavaScript', 'JSON Server', 'HTML', 'CSS'],
      type: 'interface-complexa',
      github: 'https://github.com/brunagolinelli/Hamburgueria',
    },
  ],
}

