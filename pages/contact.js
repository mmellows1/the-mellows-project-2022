import { useState } from 'react';
import Form from '../components/form';
import Input from '../components/input';
import Grid from '../components/grid';
import Heading from '../components/heading';

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
        <Form className="bg-white p-10 w-20 p-5 mx-auto" onSubmit={handleSubmit}>
            <div className="bg-slate-100 rounded-md p-10 block">
                <Heading tag="h1" className="text-5xl mb-5 text-slate-700 font-bold">Get in touch</Heading>
                <p tag="h1" className="font-bold mb-5 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar lacus leo. Nunc ut egestas dui. In hac habitasse platea dictumst. Sed scelerisque neque et mauris fermentum porta.</p>
                <Grid container sm={4} md={4} gap={8}>
                    <Grid item sm={2} md={2}>
                        <Input type="text" innerProps={{ placeholder: 'Name', name: 'name', onChange: () => handleInputChange }} />
                    </Grid>
                    <Grid item sm={2} md={2}>
                        <Input type="text" innerProps={{ placeholder: 'Email', name: 'email', onChange: () => handleInputChange }} />
                    </Grid>
                    <Grid item sm={2} md={4}>
                        <Input type="text" innerProps={{ placeholder: 'Subject', name: 'subject', onChange: () => handleInputChange }} />
                    </Grid>
                    <Grid item sm={2} md={4}>
                        <Input type="textarea" innerProps={{ placeholder: 'Message', name: 'message', onChange: () => handleInputChange }} />
                    </Grid>
                    <Grid item sm={4} md={4}>
                        <button className="w-full bg-green-500 p-3 py-5 text-white font-bold rounded-md" type="submit">123</button>
                    </Grid>
                </Grid>
            </div>
        </Form >
    )
}

export default Contact;