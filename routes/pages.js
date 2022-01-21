import { faBriefcase, faHome, faUserCheck } from "@fortawesome/free-solid-svg-icons";

export default [
    {
        isInMenu: true,
        href: '/',
        icon: faHome,
        label: 'Home'
    },
    {
        isInMenu: true,
        href: '/portfolio',
        icon: faBriefcase,
        label: 'Portfolio'
    },
    {
        isInMenu: true,
        href: '/become-a-client',
        icon: faUserCheck,
        label: 'Become a client'
    },
    {
        isInMenu: true,
        href: '/contact',
        icon: faHome,
        label: 'Contact'
    },
];