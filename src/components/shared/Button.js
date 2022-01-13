import { Link } from "react-router-dom";

const Button = (props) => {

    const { href, children, extraClasses, size, color } = props;

    const sizeMap = {
        'sm': 'p-2 px-4',
        'md': 'p-4 px-6',
        'lg': 'p-6 px-8',
    }

    const variantMap = {
        'primary': 'bg-green-500 text-white',
        'primary-alt': 'bg-white text-green-500',
        'secondary': 'bg-slate-500 text-white',
        'secondary-alt': 'bg-white text-slate-500',
    }

    const classes = `${sizeMap[size]} ${variantMap[color]} inline-block uppercase font-bold rounded-md ${extraClasses}`;

    if (href) {
        const r = new RegExp('^(?:[a-z]+:)?//', 'i');
        if (r.test(href)) {
            return <a href={href} className={classes} {...props}>{children}</a>
        } else {
            return <Link to={href} className={classes} href={href} {...props}>{children}</Link>
        }
    } else {
        return <button className={classes} {...props}>{children}</button>
    }
}

export default Button;