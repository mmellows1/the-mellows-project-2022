import { Link } from "react-router-dom";

const Section = ({ extraClasses, children, fullHeight }) => {
    const classes = `p-10 w-full ${extraClasses} ${fullHeight ? 'h-screen' : 'h-auto'}`;

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Section;