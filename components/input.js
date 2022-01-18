import React from "react";

const Input = (props) => {

    const defaultProps = {
        className: 'p-3 w-full',
        ...props.innerProps
    }

    return React.createElement(props.type == 'textarea' ? 'textarea' : 'input', defaultProps);
}

export default Input;