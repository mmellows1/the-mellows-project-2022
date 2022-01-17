import React from "react";

const Input = (props) => {

    const defaultProps = {
        className: 'bg-white p-3 w-full border-2 border-slate-100 rounded-md text-slate-300 placeholder:text-slate-300',
        ...props.innerProps
    }

    return React.createElement(props.type == 'textarea' ? 'textarea' : 'input', defaultProps);
}

export default Input;