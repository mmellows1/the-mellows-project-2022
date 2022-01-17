import { useState } from 'react';
import Form from '../components/form';
import Input from '../components/input';

const Contact = () => {

    const [values, setValues] = useState({})

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        await fetch('/api/mail', values);
    }

    return (
        <Form className="bg-white p-5" onSubmit={handleSubmit}>
            <Input type="text" name="something" onChange={handleInputChange} />
            <button type="submit">123</button>
        </Form>
    )
}

export default Contact;