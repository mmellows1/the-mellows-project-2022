import Heading from "../components/heading";
import Section from "../components/section";

// This function gets called at build time
export const getServerSideProps = async () => {
    const posts = [
        { label: 1 }
    ]
    return {
        props: {
            posts,
        },
    }
}

const BecomeAClient = ({ posts }) => {
    console.log(posts);
    return (
        <Section>
            <Heading tag="h1">Become a Client</Heading>
        </Section>
    )
}

export default BecomeAClient;