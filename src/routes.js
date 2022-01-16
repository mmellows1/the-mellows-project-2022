import { faCss3Alt, faFacebookF, faGoogle, faHtml5, faInstagram, faLinkedin, faNodeJs, faPinterest, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faHome, faPhone, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
import WorkPage from "./pages/Work";
import EightyEightDaysCalculator from "./pages/work/88DaysCalculator";
import CakesAndBakes from "./pages/work/CakesAndBakes";
import Genistar from "./pages/work/Genistar";
import Mimis from "./pages/work/Mimis";

export const routes = [
    {
        label: 'Home',
        href: '/',
        icon: faHome,
        isInMenu: true,
        component: HomePage,
    },
    {
        label: 'Portfolio',
        href: 'portfolio',
        icon: faBriefcase,
        isInMenu: true,
        component: PortfolioPage,
    },
    {
        label: 'Become a client',
        href: 'work',
        icon: faUserPlus,
        isInMenu: true,
        component: WorkPage
    },
    {
        label: 'Contact',
        href: 'contact',
        icon: faPhone,
        isInMenu: true,
        component: HomePage,
    },
]

export const socials = [
    {
        icon: faFacebookF,
        href: 'https://www.facebook.com/mdmellows/'
    },
    {
        icon: faInstagram,
        href: 'https://www.instagram.com/goonsbury_milkfloat/'
    },
    {
        icon: faLinkedin,
        href: 'https://www.linkedin.com/in/matthew-mellows-b3166487/'
    },
    {
        icon: faPinterest,
        href: 'https://www.pinterest.co.uk/mellowman99/'
    },
]

export const portfolio = [
    {
        title: '88 Days',
        alt: 'Hello this is an image',
        src: 'https://dummyimage.com/600x400/000/fff',
        tags: ['all', 'design', 'development'],
        href: '/portfolio/88-days',
        icons: [faHtml5, faCss3Alt, faGoogle, faNodeJs],
        component: EightyEightDaysCalculator
    },
    {
        title: 'Mimi\'s',
        alt: 'Hello this is an image',
        src: 'https://dummyimage.com/600x400/000/fff',
        tags: ['all', 'design', 'development'],
        href: '/portfolio/mimis',
        icons: [faHtml5, faCss3Alt, faWordpress],
        component: Mimis
    },
    {
        title: 'Cakes and Bakes',
        alt: 'Hello this is an image',
        src: 'https://dummyimage.com/600x400/000/fff',
        tags: ['all', 'design'],
        href: '/portfolio/cakes-and-bakes',
        icons: [faHtml5, faCss3Alt, faWordpress],
        component: CakesAndBakes
    },
    {
        title: 'Genistar',
        alt: 'Genistar Logo',
        src: 'https://dummyimage.com/600x400/000/fff',
        tags: ['all', 'design', 'development'],
        href: '/portfolio/genistar',
        icons: [faHtml5, faCss3Alt, faWordpress],
        component: Genistar
    },
]