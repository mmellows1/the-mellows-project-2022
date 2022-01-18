import React from "react";

const Heading = ({ tag, children, tagProps, className }) => {

    const variantsMap = {
        'h1': 'text-5xl font-bold border-l-4 pl-5 border-green-500 text-slate-800 mb-5',
        'h2': 'text-4xl font-bold',
        'h3': 'text-3xl font-bold',
        'h4': 'text-2xl font-bold',
        'h5': 'text-lg font-bold',
        'h6': 'text-md font-bold'
    }

    const defaultProps = {
        className: !className ? `${variantsMap[tag]}` : className
    }

    return (
        React.createElement(tag, { ...defaultProps, ...tagProps }, children)
    )
}

export default Heading;