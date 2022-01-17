import React from 'react';

const Form = (props) => {

    const { children } = props;

    const defaultProps = {
        ...props
    }

    return React.createElement('form', { ...defaultProps }, children);
}

export default Form;