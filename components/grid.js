import React from "react";

const Grid = (props) => {

    const { sm, md, gap, children, item, container, classes } = props;

    const defaultProps = {
        className: item ? `md:col-span-${md} sm:col-span-${sm} col-span-2` : `grid md:grid-cols-${md} grid-cols-${sm} gap-${gap}` + ` ${classes ? classes : ''}`,
    }

    return React.createElement('div', defaultProps, children);
}

export default Grid;