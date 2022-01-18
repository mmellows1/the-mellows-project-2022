import { useState } from 'react';
import Section from '@tmp/components/section';
import Heading from '@tmp/components/heading';

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
        <Section>
            <Heading tag="h1">Get in touch</Heading>
            <p>If you are interested in getting in touch</p>
            <div className="bg-slate-200 block mt-5 p-5 w-96">
                <div className="flex align-center justify-between gap-4 mb-2">
                    <p className="font-bold">Phone</p>
                    <p>07417543722</p>
                </div>
                <div className="flex align-center justify-between gap-4 mb-2">
                    <p className="font-bold">Email</p>
                    <a href="mailto: mmellows1@gmail.com">mmellows1@gmail.com</a>
                </div>
                <div className="border-dotted border-b-2 border-b-slate-400 border-2 my-5"></div>
                <div className="flex align-center justify-between gap-4 mb-2">
                    <p className="font-bold">Facebook</p>
                    <p>@matthew.mellows</p>
                </div>
                <div className="flex align-center justify-between gap-4 mb-2">
                    <p className="font-bold">Twitter</p>
                    <p>@mellows99</p>
                </div>
                <div className="flex align-center justify-between gap-4">
                    <p className="font-bold">Instagram</p>
                    <p>@goonsbury_milkfloat</p>
                </div>
            </div>
        </Section>
    )
}

export default Contact;