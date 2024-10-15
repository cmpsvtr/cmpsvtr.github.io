// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'cmpsvtr', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projetos no Github',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfólio de Vitor Campos',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'vitorhscampos',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'vitorhscampos+site@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'iOS',
    'Swift',
    'Kotlin',
    'Objective-C',
    'Backend For Frontend',
    'Java',
    'AWS',
    'REST',
    'GIT',
  ],
  experiences: [
    {
      company: 'Itaú Unibanco',
      position: 'Engenheiro de Software Pleno',
      from: 'Março 2021',
      to: 'Presente',
      companyLink: 'https://itau.com.br',
    },
    {
      company: 'VExpenses',
      position: 'Desenvolvedor de apps',
      from: 'Novembro 2017',
      to: 'Fevereiro 2021',
      companyLink: 'https://vexpenses.com.br',
    },
  ],
  certifications: [
    {
      name: 'Leadership and Communication',
      body: 'Harvard University',
      year: 'Agosto 2024',
      link: 'https://credentials.edx.org/credentials/f1e77046c9344b04a6f430947b99da31/',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      body: 'Amazon Web Services',
      year: 'Maio 2022',
      link: 'https://www.credly.com/badges/ee8dac03-bd03-402c-93bb-13d457f4d2e6',
    },
    {
      name: 'Google Analytics Certification',
      body: 'Google',
      year: 'Julho 2024',
      link: 'https://skillshop.credential.net/c2b2fc7d-4574-4667-b870-161e80cb5d13',
    },
    {
      name: 'EF SET English Certificate 84/100 (C2 Proficient)',
      body: 'EF SET',
      year: 'Julho 2023',
      link: 'https://cert.efset.org/siWkN3',
    },
  ],
  educations: [
    {
      institution: 'Universidade Anhembi Morumbi',
      degree: 'Estatística',
      from: '2023',
      to: '2026',
    },
    {
      institution: 'Faculdade de Tecnologia de São Paulo - FATEC',
      degree: 'Análise e Desenvolvimento de Sistemas',
      from: '2017',
      to: '2020',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `2024 Vitor Campos`,

  enablePWA: true,
};

export default CONFIG;
