import React from "react";

const Heading = ({ tag, children, tagProps }) => {

    const defaultProps = {
        className: 'text-2xl font-bold border-l-4 pl-5 border-green-500 text-slate-800'
    }

    return (
        React.createElement(tag, { ...defaultProps, ...tagProps }, children)
    )
}

export default Heading;