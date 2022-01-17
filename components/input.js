import React from "react";

const Input = (props) => {

    const defaultProps = {
        className: 'bg-white p-3 w-full border-2 border-red-500',
        onFocus: () => console.log(1),
        ...props
    }

    return React.createElement('input', defaultProps);
}

export default Input;