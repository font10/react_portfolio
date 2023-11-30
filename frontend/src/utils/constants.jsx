import {
  cloudinary,
  css3,
  design_icon,
  development_icon,
  express,
  eye,
  figma,
  firebase,
  firestore,
  flutter,
  git,
  github,
  html5,
  jest,
  js,
  jwt,
  mern_boilerplate,
  mongo,
  node,
  photoshop,
  react,
  react_hook_form,
  react_router_dom,
  react_testing_library,
  react_toastify,
  redux,
  supertest,
  tailwind,
  vitest,
  yup
} from "../assets/icons"
import {
  auth_crud_bloc,
  blog,
  ecommerce,
  montana,
  portfolio
} from '../assets/images/index'

export const habsWeb = [
  { id: 1, img: html5 }, 
  { id: 2, img: css3 }, 
  { id: 3, img: js }, 
  { id: 4, img: react }, 
  { id: 5, img: redux }, 
  { id: 9, img: tailwind }, 
  { id: 6, img: node }, 
  { id: 7, img: express }, 
  { id: 8, img: mongo }, 
  { id: 9, img: git }, 
  { id: 10, img: vitest }, 
  { id: 11, img: yup }, 
]

export const habsDesign = [
  { id: 1, img: figma }, 
  { id: 2, img: photoshop }, 
]

export const habs = [
  { id: 1, name: "Desarrollo web", tech: habsWeb },
  { id: 2, name: "UI/UX Design", tech: habsDesign },
]

export const experience = [
  { id: 13, date: "Abr 2023 - Jun 2023", position: "React Frontend Developer", company: 'Protecbox' },
  { id: 12, date: "Mar 2022 - Oct 2022", position: "Frontend Júnior", company: 'Nexus Geographics' },
  { id: 11, date: "Mar 2021 - Set 2021", position: "Oficial 1a Taller Radio", company: 'Generalitat de Catalunya' },
  { id: 10, date: "Mar 2020 - Set 2020", position: "Oficial 1a Taller Radio", company: 'Generalitat de Catalunya' },
  { id: 9, date: "May 2019 - Nov 2019", position: "Oficial 1a Taller Radio", company: 'Generalitat de Catalunya' },
  { id: 8, date: "May 2018 - Abr 2019", position: "Oficial 1a Taller Radio", company: 'Generalitat de Catalunya' },
  { id: 7, date: "Dic 2017 - Abr 2018", position: "Operario", company: 'Haribo' },
  { id: 6, date: "May 2017 - Nov 2017", position: "Oficial 1a Taller Radio", company: 'Generalitat de Catalunya' },
  { id: 5, date: "Ene 2017 - May 2017", position: "Becario Frontend Developer Vue.js", company: 'Anpro 21' },
  { id: 4, date: "May 2015 - Nov 2015", position: "Oficial 1a Taller Radio", company: 'Generalitat de Catalunya' },
  { id: 3, date: "May 2014 - Ene 2015", position: "Oficial 1a Taller Radio", company: 'Generalitat de Catalunya' },
  { id: 2, date: "May 2013 - Nov 2013", position: "Oficial 1a Taller Radio", company: 'Generalitat de Catalunya' },
  { id: 1, date: "Ago 2012 - Oct 2012", position: "Oficial 1a Taller Radio", company: 'Generalitat de Catalunya' },
]

export const studies = [
  { id: 1, date: "2023 - Actualmente", titulo: "Formación React" },
  { id: 2, date: "2022 - 2023", titulo: "Formación Flutter" },
  { id: 3, date: "2021", titulo: "Formacion Vue.js" },
  { id: 4, date: "2017 - 2018", titulo: "Grado Superior DAW" },
  { id: 5, date: "2012 - 2014", titulo: "Grado Superior DAM" },
  { id: 6, date: "2011 - 2012", titulo: "Prueba acceso a Grado Superior" },
  { id: 7, date: "2009 - 2011", titulo: "Grado Medio SMX" },
  { id: 8, date: "2005 - 2009", titulo: "ESO" },
]

export const services = [
  { id: 1, name: "Diseño", icon: design_icon, description: 'Diseños web responsive, interactivos y buen diseño para el usuario' },
  { id: 2, name: "Desarrollo", icon: development_icon, description: 'Desarrollo frontend y backend principalmente en Javascript entre otros' },
]

export const projects = [
  { id: 1, 
    name: 'React Portfolio', 
    category: 'Frontend', 
    image: portfolio,
    links: [
      { img: github, link: 'https://github.com/font10/react_portfolio' },
      { img: eye, link: 'https://react-portfolio-5xoj.onrender.com/' },      
      { img: figma, link: 'https://www.figma.com/file/m3W2PTMuKGIKRLOAiqR6mp/React-Portfolio?type=design&node-id=0-1&mode=design&t=6DIo6bOW7jpRZ7oa-0' },
    ],
    tech: [react, tailwind, node, express] 
  },
  { id: 2, 
    name: 'Mern Boilerplate', 
    category: 'Frontend', 
    image: mern_boilerplate, 
    links: [
      { img: github, link: 'https://github.com/font10/mern_boilerplate' },
      { img: eye, link: 'https://mern-boilerplate-frontend.onrender.com/' }
    ],
    tech: [react, redux, tailwind, node, express, mongo, vitest, jest, supertest, yup, jwt, react_testing_library, react_hook_form, react_router_dom, cloudinary, react_toastify] 
  },
  { id: 3, 
    name: 'Mern Blog App', 
    category: 'Mern Stack', 
    image: blog, 
    links: [
      { img: github, link: 'https://github.com/stars/font10/lists/mern-blog-project' },
      { img: eye, link: 'https://blog-frontend-0zdd.onrender.com/' },      
      { img: figma, link: 'https://www.figma.com/file/m3W2PTMuKGIKRLOAiqR6mp/React-Portfolio?type=design&node-id=0-1&mode=design&t=6DIo6bOW7jpRZ7oa-0' },
    ],
    tech: [react, redux, tailwind, node, express, mongo, jwt, react_router_dom, cloudinary] 
  },
  { id: 4, 
    name: 'Mern Basic Ecommerce App', 
    category: 'Mern Stack', 
    image: ecommerce, 
    links: [
      { img: github, link: 'https://github.com/stars/font10/lists/mern-ecommerce' },
      { img: eye, link: 'https://mern-ecommerce-frontend-oj36.onrender.com/' },
    ],
    tech: [react, redux, tailwind, node, express, mongo, jwt, react_router_dom, cloudinary] 
  },
  { id: 5, 
    name: 'Mern Recipe App', 
    category: 'Mern Stack', 
    image: montana, 
    links: [
      { img: github, link: 'https://github.com/stars/font10/lists/umai-project' },
      { img: eye, link: 'https://umai.onrender.com/' }
    ],
    tech: [react, redux, tailwind, node, express, mongo, jwt, react_router_dom, cloudinary] 
  },
  { id: 6, 
    name: 'Flutter Boilerplate Bloc Auth & Crud Firestore', 
    category: 'Frontend', 
    image: auth_crud_bloc, 
    links: [
      { img: github, link: 'https://github.com/font10/flutter_boilerplate_bloc_auth_crud_firebase' },
      { img: eye, link: 'https://drive.google.com/file/d/15z_7_RsKaCtL0wFCqnz54u8IDPfaWAQI/view' }
    ],
    tech: [flutter, firebase, firestore] 
  }
]

export const inputsContact = [
  { id: 1, label: "Nombre", type: "text", name: "nombre", placeholder: "Nombre" }, 
  { id: 2, label: "Apellido", type: "text", name: "apellido", placeholder: "Apellido" },
  { id: 3, label: "Asunto", type: "text", name: "asunto", placeholder: "Asunto" },
  { id: 4, label: "Mensaje", type: "text", name: "mensaje", placeholder: "Mensaje" },
]
