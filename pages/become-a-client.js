import Heading from "../components/heading";
import Section from "../components/section";

// This function gets called at build time
export const getStaticProps = async () => {
    const posts = [
        { label: 1 }
    ]
    return {
        props: {
            posts,
        },
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
}

const BecomeAClient = ({ posts }) => {
    console.log(posts);
    return (
        <Section>
            <Heading tag="h1">Become a Client</Heading>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-2">
                        <input placeholder="name" className="w-full p-3" required />
                    </div>
                    <div className="col-span-2">
                        <input placeholder="last name *" className="w-full p-3" required />
                    </div>
                    <div className="col-span-2">
                        <input placeholder="email *" className="w-full p-3" required />
                    </div>
                    <div className="col-span-2">
                        <input placeholder="sector *" className="w-full p-3" required />
                    </div>
                    <div className="col-span-4">
                        <input placeholder="phone" className="w-full p-3" />
                    </div>
                    <div className="col-span-4">
                        <label className="mb-2 block text-lg font-bold">Budget</label>
                        <div className="flex justify-between gap-4">
                            <label className="flex gap-2 items-center">
                                <input type="radio" name="budget" value="" />
                                <span>£0 - £499</span>
                            </label>
                            <label className="flex gap-2 items-center">
                                <input type="radio" name="budget" value="" />
                                <span>£500 - £999</span>
                            </label>
                            <label className="flex gap-2 items-center">
                                <input type="radio" name="budget" value="" />
                                <span>£1000 - £1,499</span>
                            </label>
                            <label className="flex gap-2 items-center">
                                <input type="radio" name="budget" value="" />
                                <span>£1,500+</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <textarea className="w-full p-3" rows="4" placeholder="description *" required />
                        <p className="text-slate-600 text-sm font-bold">A little description of your project or work you want doing</p>
                    </div>
                    <div className="col-span-4">
                        <button className="p-3 bg-green-500 text-white rounded-md w-full">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </Section>
    )
}

export default BecomeAClient;