import React from "react";

const Input = (props) => {

    const defaultProps = {
        className: 'bg-white p-3 w-full border-b-2 border-orange-500 text-green0',
        ...props.innerProps
    }

    return React.createElement(props.type == 'textarea' ? 'textarea' : 'input', defaultProps);
}

export default Input;