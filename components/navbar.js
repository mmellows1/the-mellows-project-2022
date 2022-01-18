import { faBriefcase, faHome, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ListItem = ({ label, href }) => (
    <li className="font-bold p-3 text-white">
        <Link href={href}>{label}</Link>
    </li>
);
const Navbar = () => {

    const routes = [
        {
            isInMenu: true,
            href: '/',
            icon: faHome,
            label: 'Home'
        },
        {
            isInMenu: true,
            href: '/work',
            icon: faBriefcase,
            label: 'Work'
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

    return (
        <nav>
            <div className="md:hidden block">
                {routes.filter(({ isInMenu }) => isInMenu).map(a => (
                    <Link href={a.href}>
                        <div className="block bg-green-400 text-white rounded-full w-12 h-12 relative mb-4">
                            <FontAwesomeIcon icon={a.icon} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </Link>
                ))}
            </div>
            <div className="hidden md:block">
                <Link href="/">
                    <h2 className="text-2xl uppercase font-bold text-center text-white mb-4">
                        the Mellows Project
                    </h2>
                </Link>
                <p className="text-center font-bold text-sm text-white">Hi, my name is Matthew Mellows, I am {age(new Date('23 July 1991'))} years old and have been developing for {age(new Date('23 July 2013'))} years, mainly specializing in in React and Wordpress</p>
                <hr className="border-b-2 border-opacity-20 border-white mt-4 mb-3" />
                <ul>
                    <div className="text-center">
                        {routes.filter(({ isInMenu }) => isInMenu).map(a => <ListItem label={a.label} href={a.href} />)}
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;