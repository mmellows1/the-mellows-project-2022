import Heading from "@tmp/components/heading";
import Section from "@tmp/components/section";
import Link from "next/link";
import { useRef, useState } from "react";
import FadeIn from 'react-fade-in';

export const getStaticProps = async () => {


    const portfolioItems = [
        {
            image: 'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            heading: '88 Days',
            paragraph: 'Lorem ipsum em so too.',
            href: '/work/eighty-eight-days',
            tags: ['all', 'design']
        },
        {
            image: 'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            heading: 'Cakes and Bakes',
            paragraph: 'Lorem ipsum em so too.',
            href: '/work/cakes-and-bakes',
            tags: ['all', 'development']
        },
        {
            image: 'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            heading: 'Mimis',
            paragraph: 'Lorem ipsum em so too.',
            href: '/work/mimis',
            tags: ['all', 'design']
        },
    ]

    return {
        props: {
            portfolioItems
        }
    }
}

const PortfolioItem = ({ data }) => {
    const { heading, paragraph, href, image, tags } = data;
    console.log({ heading, paragraph, href, image });

    return (
        <Link href={href}>
            <div className="flex gap-4">
                <div className="w-48 h-36 bg-orange-500 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="bg-slate-100 p-5 w-full">
                    <Heading tag="h2" className="font-bold text-2xl">{heading}</Heading>
                    <p>{paragraph}</p>
                    <p className="text-sm mt-2 uppercase">{tags.join(', ')}</p>
                </div>
            </div>
        </Link>
    )
}

function Work({ portfolioItems }) {

    const [tag, setTag] = useState('all');
    const tags = ['design', 'development', 'ui', 'all'];

    return (
        <Section>
            <div>
                <Heading tag="h1">Portfolio</Heading>
                <p>Welcome to my portfolio page, here you can see all my work that I have worked on over the years of being a developer</p>
            </div>
            <div className="py-5 gap-4 flex">
                {tags.map(a => a == tag ? (
                    <button className="bg-green-500 border-4 uppercase font-bold text-sm border-green-500 px-10 py-2 text-white rounded-md">{a}</button>
                ) : (
                    <button className="bg-white border-4 uppercase font-bold text-sm text-green-500 border-green-500 px-10 py-2 rounded-md" onClick={() => setTag(a)}>{a}</button>
                ))}
            </div>
            <FadeIn delay={50} className="flex flex-col gap-4">
                {portfolioItems.filter((a) => a.tags.includes(tag)).map(a => <PortfolioItem data={a} />)}
            </FadeIn>
        </Section>
    )
}

export default Work