import { Link } from "react-router-dom";

const Heading = ({ extraClasses = '', children, variant = "h1", size = 5, color = "primary", borderSide = "default" }) => {


    const variantMap = {
        'primary': 'border-l-green-500',
        'secondary': 'border-l-slate-500',
    }

    const bordertMap = {
        'underlined': 'pb-4 border-b-4 px-5',
        'default': 'border-l-4 pl-5'
    }

    const classes = `${bordertMap[borderSide]} ${variantMap[color]} text-${size}xl font-bold ${extraClasses}`;

    const Tag = variant;

    return (
        <Tag className={classes}>
            {children}
        </Tag>
    )
}

export default Heading;