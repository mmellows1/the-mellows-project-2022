import { Link } from "react-router-dom";

const Section = ({ extraClasses, children }) => {
    const classes = `p-10 w-full ${extraClasses}`;

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Section;