import { faArtstation, faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png';
import Button from "./shared/Button";



const ListItem = ({ label, href }) => (
    <li className="font-bold p-3 text-white">
        <Link to={href}>{label}</Link>
    </li>
);

const SocialItem = ({ icon, href }) => (
    <li className="w-8 h-8 bg-white text-center rounded-full text-green-500 relative">
        <a className="absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 hover:text-green-600" target="_blank" href={href}>
            <FontAwesomeIcon icon={icon} />
        </a>
    </li>
)

const routes = [
    {
        label: 'Home',
        href: '/',
        icon: faHome
    },
    {
        label: 'Work',
        href: '/work',
        icon: faBriefcase
    },
    {
        label: 'Portfolio',
        href: '/porfolio',
        icon: faArtstation
    },
    {
        label: 'Contact',
        href: '/contact',
        icon: faPhone
    }
]

const socials = [
    {
        icon: faFacebookF,
        href: 'https://www.facebook.com/mdmellows/'
    },
    {
        icon: faInstagram,
        href: 'https://www.instagram.com/goonsbury_milkfloat/'
    },
    {
        icon: faLinkedinIn,
        href: 'https://www.linkedin.com/in/matthew-mellows-b3166487/'
    },
]

const age = (birthDate) => {
    var now = new Date();

    function isLeap(year) {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }

    // days since the birthdate    
    var days = Math.floor((now.getTime() - birthDate.getTime()) / 1000 / 60 / 60 / 24);
    var age = 0;
    // iterate the years
    for (var y = birthDate.getFullYear(); y <= now.getFullYear(); y++) {
        var daysInYear = isLeap(y) ? 366 : 365;
        if (days >= daysInYear) {
            days -= daysInYear;
            age++;
            // increment the age only if there are available enough days for the year.
        }
    }
    return age;
}

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="">
            <div className="block md:hidden">
                {routes.map(a => (
                    <Link to={a.href} className="block bg-green-400 text-white rounded-full w-12 h-12 relative mb-4">
                        <FontAwesomeIcon icon={a.icon} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </Link>
                ))}
            </div>
            <div className="hidden md:block">
                <Link to="/"><img src={logo} className="App-logo" alt="logo" className="rounded-full mx-auto mb-4 w-24" /></Link>
                <p className="text-center text-sm text-white">Hi, my name is Matthew Mellows, I am {age(new Date('23 July 1991'))} years old and have been developing for {age(new Date('23 July 2013'))} years, mainly specializing in in React and Wordpress</p>
                <hr className="border-b-2 border-opacity-20 border-white mt-4 mb-3" />
                <ul className="flex justify-center gap-2">
                    {socials.map(a => <SocialItem icon={a.icon} href={a.href} />)}
                </ul>
                <ul>
                    <div className="">
                        {routes.map(a => <ListItem label={a.label} href={a.href} />)}
                    </div>
                    <div className="m-5">
                        <Button href="/quote" color="primary-alt" size="sm" extraClasses="w-full">
                            Get a quote
                        </Button>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;