import envato from 'common/assets/image/webAppCreative/clients/envato.png';
import evernote from 'common/assets/image/webAppCreative/clients/evernote.png';
import forbes from 'common/assets/image/webAppCreative/clients/forbes.png';
import geekwire from 'common/assets/image/webAppCreative/clients/geekwire.png';
import slack from 'common/assets/image/webAppCreative/clients/slack.png';
import usaToday from 'common/assets/image/webAppCreative/clients/usa-today.png';
import icon1 from 'common/assets/image/webAppCreative/icons/1.png';
import icon2 from 'common/assets/image/webAppCreative/icons/2.png';
import icon4 from 'common/assets/image/webAppCreative/icons/4.png';
import icon5 from 'common/assets/image/webAppCreative/icons/5.png';
import icon6 from 'common/assets/image/webAppCreative/icons/6.png';
import icon7 from 'common/assets/image/webAppCreative/icons/7.png';
import dashboardImg from 'common/assets/image/webAppCreative/checkout-page-large.png';
import checkoutPaid from 'common/assets/image/webAppCreative/checkout-paid.png';
import platformPayments from 'common/assets/image/webAppCreative/platform-payments.png';
import orderPaid from 'common/assets/image/webAppCreative/order-paid.png';
import asana from 'common/assets/image/webAppCreative/icons/asana.png';
import drive from 'common/assets/image/webAppCreative/icons/drive.png';
import dropbox from 'common/assets/image/webAppCreative/icons/dropbox.png';
import fontAwesome from 'common/assets/image/webAppCreative/icons/fontawesome.png';
import github from 'common/assets/image/webAppCreative/icons/github.png';
import googleCloud from 'common/assets/image/webAppCreative/icons/google-cloud.png';
import messenger from 'common/assets/image/webAppCreative/icons/messenger.png';
import nginx from 'common/assets/image/webAppCreative/icons/nginx.png';
import slack2 from 'common/assets/image/webAppCreative/icons/slack.png';
import smashingMag from 'common/assets/image/webAppCreative/icons/smashing-mag.png';
import zeplin from 'common/assets/image/webAppCreative/icons/zeplin.png';
import zoom from 'common/assets/image/webAppCreative/icons/zoom.png';
import icecream from 'common/assets/image/webAppCreative/icons/icecream.png';
import donut from 'common/assets/image/webAppCreative/icons/donut.png';
import pizza from 'common/assets/image/webAppCreative/icons/pizza.png';
import post1 from 'common/assets/image/webAppCreative/post1.png';
import post2 from 'common/assets/image/webAppCreative/post2.png';
import post3 from 'common/assets/image/webAppCreative/post3.png';
import siteLogo from 'common/assets/image/webAppCreative/logo.svg';
import facebook from 'common/assets/image/webAppCreative/icons/facebook.png';
import twitter from 'common/assets/image/webAppCreative/icons/twitter.png';
import dribbble from 'common/assets/image/webAppCreative/icons/dribbble.png';

export const menu_items = [
  {
    label: 'Início',
    path: '#home',
    offset: '70',
  },
  {
    label: 'Funcionalidades',
    path: '#how-to',
    offset: '70',
  },
  {
    label: 'Funcionamento',
    path: '#features',
    offset: '70',
  },
  {
    label: 'Preços',
    path: '#pricing',
    offset: '70',
  },
  {
    label: 'FAQs',
    path: '#faq',
    offset: '70',
  },
];

export const clients = [envato, evernote, forbes, geekwire, slack, usaToday];

export const howTos = [
  {
    id: 1,
    icon: icon1,
    title: 'Pagamentos no Checkout',
    text: `Os pagamentos são efetuados no checkout da loja, sem redirecionamentos.`,
  },
  {
    id: 2,
    icon: icon2,
    title: 'Estatisticas em tempo real',
    text: `Monitore o estado dos pagamentos em tempo real, sem atrasos.`,
  },
  {
    id: 3,
    icon: icon4,
    title: 'Pagamentos Seguros',
    text: `Os pagamentos são processados seguindo os padrões de segurança.`,
  },
];

export const analyticsTool = {
  slogan: 'Monitoramento facilitado',
  title: 'Ferramentas analíticas avançadas para mantê-lo no controle e actualizado.',
  desc: `Pode analizar e validar os pagamentos a qualquer momento, sem a necessidade de esperar por relatórios.`,
  features: [],
  button: {
    link: '#',
    label: 'Inicial Agora',
  },
};

export const dashboard = {
  sectionTitle: 'Como Funciona',
  sectionDesc: `Os seus clientes fazem o pagamento directamente na página do checkout da sua loja, sem redirecionamentos. A encomenda é marcada como paga automaticamente.`,
  tabs: [
    {
      id: 1,
      title: 'Checkout',
      content: {
        image: dashboardImg,
      },
    },
    {
      id: 2,
      title: 'Pagamento',
      content: {
        image: checkoutPaid,
      },
    },
    {
      id: 3,
      title: 'Encomenda',
      content: {
        image: orderPaid,
      },
    },
    {
      id: 4,
      title: 'Analytics',
      content: {
        image: platformPayments,
      },
    },
  ],
};

export const testimonials = [
  {
    id: 1,
    logo: icon5,
    author: 'Johnny Simpson',
    designation: 'Head of Design',
    quote: `Each room is loaded with the most collaborative surfaces so you can quickly take notes, capture to-dos, and share ideas. Pick one of our stock themes, or create your custom theme with the editors.`,
  },
  {
    id: 2,
    logo: icon6,
    author: 'Deanna Hodges',
    designation: 'Business HR Admin',
    quote: `We deliver on such an expansive with innovation agenda with so many theme projects going on at any time, it can be hard to maintain momentum. So We appreciate to work with them.`,
  },
  {
    id: 3,
    logo: icon7,
    author: 'Gracelyn Mason',
    designation: 'Senior Marketer',
    quote: `Flat item is loaded with the most of collaborative surfaces so you can do quickly take notes, capture to-dos, and share ideas. Pick one of our stock themes, or create your custom theme with statics.`,
  },
  {
    id: 4,
    logo: icon5,
    author: 'Gracelyn Mason',
    designation: 'Senior Marketer',
    quote: `Flat item is loaded with the most of collaborative surfaces so you can do quickly take notes, capture to-dos, and share ideas. Pick one of our stock themes, or create your custom theme with statics.`,
  },
];

export const appIntegration = {
  sectionTitle: 'Lets see what we integrate',
  sectionDesc: `We recently had to jump on 10+ different plugin across eight different countries to find the right owner and escalation process.`,
  apps: [
    {
      id: 1,
      icon: nginx,
      name: 'nginx',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 2,
      icon: googleCloud,
      name: 'googleCloud',
      bgColor: '#fff',
      isBlurred: false,
    },
    {
      id: 3,
      icon: slack2,
      name: 'slack',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 4,
      icon: dropbox,
      name: 'dropbox',
      bgColor: '#fff',
      isBlurred: false,
    },
    {
      id: 5,
      icon: drive,
      name: 'drive',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 6,
      icon: asana,
      name: 'asana',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 7,
      icon: github,
      name: 'github',
      bgColor: '#fff',
      isBlurred: false,
    },
    {
      id: 8,
      icon: zeplin,
      name: 'zeplin',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 9,
      icon: nginx,
      name: 'nginx',
      bgColor: null,
      isBlurred: true,
    },
    {
      id: 10,
      icon: messenger,
      name: 'messenger',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 11,
      icon: zoom,
      name: 'zoom',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 12,
      icon: smashingMag,
      name: 'smashingMag',
      bgColor: '#fff',
      isBlurred: false,
    },
    {
      id: 13,
      icon: fontAwesome,
      name: 'fontAwesome',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 14,
      icon: drive,
      name: 'google drive',
      bgColor: null,
      isBlurred: true,
    },
  ],
};

export const pricing = [
  {
    id: 1,
    price: 1000,
    currencySymbol: 'MT',
    isActive: false,
    title: 'Pacote Básico',
    desc: 'Para quem está a começar e quer experimentar.',
    icon: icecream,
    button: {
      label: '1 Mês de Serviço',
      link: `https://wa.me/+258863306137?text=${encodeURI('Saudações, gostaria de obter o pacote básico.')}`,
    },
  },
  {
    id: 2,
    price: 6000,
    currencySymbol: 'MZN',
    isActive: true,
    title: 'Pacote Premium',
    desc: 'Para lojas médias e querem crescer mais rápido.',
    icon: donut,
    button: {
      label: '6 Meses de Serviço',
      link: `https://wa.me/+258863306137?text=${encodeURI('Saudações, gostaria de obter o pacote premium.')}`
    },
  },
  {
    id: 3,
    price: 12000,
    currencySymbol: 'MT',
    isActive: false,
    title: 'Pacote Empresarial',
    desc: 'Para lojas grandes e querem expandir.',
    icon: pizza,
    button: {
      label: '1 Ano de Serviço',
      link: `https://wa.me/+258863306137?text=${encodeURI('Saudações, gostaria de obter o pacote empresarial.')}`
    },
  },
];

export const posts = [
  {
    id: 1,
    date: 'June 3, 2020',
    image: post1,
    title: 'The three Fundamental Rules to Keep Your Website Goal Orientated',
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
  {
    id: 2,
    date: 'Dec 8, 2020',
    image: post2,
    title: 'Five Common Mistakes Teams Make When Tracking Performance',
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
  {
    id: 3,
    date: 'Dec 8, 2020',
    image: post3,
    title: `Why You Might Want to Reconsider with Tracking First Meaningful Paint`,
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
];

export const faqs = [
  {
    id: 1,
    title: '01. Quanto tempo demora o processo de integração?',
    description: `Após a confirmação do pagamento, o processo de integração é feito dentro 48 horas. Caso haja algum problema, será contactado.`,
  },
  {
    id: 2,
    title: '02. Quem faz a integração?',
    description: `A integração é feita por um técnico especializado, que irá garantir que tudo está a funcionar correctamente.`,
  },
  {
    id: 3,
    title: '03. Posso cancelar a qualquer momento?',
    description: `Sim, pode cancelar a qualquer momento. O pagamento é feito mensalmente, sem fidelização.`,
  }
];

export const footerTop = {
  about: {
    logo: siteLogo,
    text: `Gateway de pagamentos Mpesa para Shopify. Receba pagamentos Mpesa na sua loja online.`,
  },
  widgets: [
    {
      id: 2,
      title: 'About Us',
      list: [
        {
          id: 1,
          title: 'Funcionalidades',
          link: '#',
        },
        {
          id: 2,
          title: 'Como Funciona',
          link: '#',
        },
        {
          id: 3,
          title: 'Preços',
          link: '#',
        },
        {
          id: 4,
          title: 'FAQs',
          link: '#',
        }
      ],
    },
    {
      id: 3,
      title: '',
      list: [],
    },
    {
      id: 4,
      title: '',
      list: [],
    },
  ],
  contactInfo: {
    title: 'Contact info',
    address: `Mohakhali DOHS, Amsterdam, Netherlands`,
    phone: `+31 62 19 22 705`,
    openingTime: `7 Days - 8am - 10pm`,
    email: `info@redqteam.com`,
  },
};

export const footer = {
  copyright: `©${new Date().getFullYear()} S-Payments. Todos os direitos reservados.`,
  nav: [
  ],
  socialLinks: [
    {
      id: 1,
      link: 'http://facebook.com',
      icon: facebook,
      label: 'Facebook',
    },
    {
      id: 2,
      link: 'http://twitter.com',
      icon: twitter,
      label: 'Twitter',
    },
    {
      id: 3,
      link: 'http://dribbble.com',
      icon: dribbble,
      label: 'Dribbble',
    },
  ],
};
