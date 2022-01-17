import React from "react";

const Grid = (props) => {

    const {sm, md, gap, children, item, container} = props;

    const defaultProps = {
        className: item ? `md:col-span-${md} sm:col-span-${sm} col-span-4` : `grid md:grid-cols-${md} grid-cols-${sm} gap-${gap}`,
        onFocus: () => console.log(1),
    }

    return React.createElement('div', defaultProps, children);
}

export default Grid;