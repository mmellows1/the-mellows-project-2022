import { useState } from 'react';
import Form from '../components/form';
import Input from '../components/input';
import Grid from '../components/grid';

const Contact = () => {

    const [values, setValues] = useState({})

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert()
        await fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(values)
        });
    }

    return (
        <Form className="bg-white p-5 w-20 mx-auto" onSubmit={handleSubmit}>
            <Grid container sm={4} md={4} gap={4}>
                <Grid item sm={2} md={2}>
                    <Input type="text" innerProps={{placeholder: 'Name', name: 'name', onChange: () => handleInputChange}} />
                </Grid>
                <Grid item sm={2} md={2}>
                    <Input type="text"  innerProps={{placeholder: 'Email', name: 'email', onChange: () => handleInputChange}} />
                </Grid>
                <Grid item sm={2} md={4}>
                    <Input type="text" innerProps={{placeholder: 'Subject', name: 'subject', onChange: () => handleInputChange}} />
                </Grid>
                <Grid item sm={2} md={4}>
                    <Input type="textarea" innerProps={{placeholder: 'Message', name: 'message', onChange: () => handleInputChange}} />
                </Grid>
                <Grid item sm={4} md={4}>
                    <button className="w-full bg-green-400 p-2 text-white rounded-md" type="submit">123</button>
                </Grid>
            </Grid>
        </Form>
    )
}

export default Contact;