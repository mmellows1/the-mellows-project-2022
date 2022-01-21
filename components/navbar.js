import { faBriefcase, faHome, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import pages from '@tmp/routes/pages';
import socials from '@tmp/routes/social-items';

const ListItem = ({data}) => {
    const {href, label} = data;
    return (
        <li className="text-white">
            <Link href={href}>{label}</Link>
        </li>
    )   
}

const SocialItem = ({data}) => {
    const { icon, href } = data;
    return (
        <Link href={href}>
            <div className="cursor-pointer w-8 h-8 bg-white rounded-full text-center relative text-green-500 hover:bg-green-200 hover:text-green-600">
                <FontAwesomeIcon icon={icon} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-green-800" />
            </div>
        </Link>
    )
}

const Copywrite = () => {
    return (
        <p className="text-white text-xs font-thin">&copy; Copyright of <span className="font-bold">themellowsproject.com</span></p>
    )
}

const Navbar = () => {

    const age = (birthDate) => {
        var now = new Date();

        function isLeap(year) {
            return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
        }

        var days = Math.floor((now.getTime() - birthDate.getTime()) / 1000 / 60 / 60 / 24);
        var age = 0;
        for (var y = birthDate.getFullYear(); y <= now.getFullYear(); y++) {
            var daysInYear = isLeap(y) ? 366 : 365;
            if (days >= daysInYear) {
                days -= daysInYear;
                age++;
            }
        }
        return age;
    }

    socials.forEach(console.log)

    return (
        <div className="shrink-0 grow-0 basis-auto md:basis-72 px-2 md:px-6 bg-green-500 bg-opacity-90 h-screen">
            <nav className="h-full py-10">
                <div className="md:hidden block">
                    {pages.filter(({ isInMenu }) => isInMenu).map(a => (
                        <Link href={a.href}>
                            <div className="block bg-green-400 text-white rounded-full w-12 h-12 relative mb-4">
                                <FontAwesomeIcon icon={a.icon} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="hidden md:grid h-full">
                    <Link href="/">
                        <h2 className="text-3xl uppercase font-bold text-white mb-4">
                            the Mellows Project
                        </h2>
                    </Link>
                    <ul className="flex flex-col gap-4 font-bold">
                        {pages.map(a =><ListItem data={a}/>)}
                    </ul>
                    <div className="self-end">
                        <ul className="my-5 flex justify-start gap-4">
                            {socials.map(a => <SocialItem data={a} />)}
                        </ul>
                        <Copywrite />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;