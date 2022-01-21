import Heading from "@tmp/components/heading";
import Section from "@tmp/components/section";
import Link from "next/link";
import { useRef, useState } from "react";
import FadeIn from 'react-fade-in';
import portfolioItems from '@tmp/routes/portfolio-items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export const getStaticProps = async () => {
    return {
        props: {
            portfolioItems
        }
    }
}

<<<<<<< HEAD
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
=======
const PortfolioEntry = ({data}) => {

    const {image, href} = data;


    return (
        <Link href={href}>
            <div className={`col-span-2 row-span-2 bg-purple-500 h-96 p-10 bg-cover relative overflow-hidden group`} style={{backgroundImage: `url(${image})`}}>
                <span className="group-hover:opacity-50 transition-all absolute left-0 top-0 bg-black opacity-0 w-full h-full"></span>
                <span className="transition-all group-hover:bottom-1/2 absolute -bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white text-slate-800 w-24 h-24 rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={faEye} size="2x" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </span>
            </div>
        </Link>
    )
}

const PortfolioItem = ({data}) => {
    const {heading, paragraph, href, image, tags} = data;

    return (
        <Link href={href}>
            <div className="flex gap-4 cursor-pointer">
                <div className="w-48 h-36 bg-orange-500 bg-cover bg-center" style={{backgroundImage: `url(${image})`}}></div>
                <div className="p-5 w-full">
                    <Heading tag="h2" className="font-bold text-2xl text-slate-700">{heading}</Heading>
                    <p className="text-slate-700">{paragraph}</p>
                    <p className="text-slate-700 font-bold text-sm mt-2 uppercase">{tags.join(', ')}</p>
>>>>>>> b109c8026e79c8da80ec9b3d499d45ae914f8580
                </div>
            </div>
        </Link>
    )
}

<<<<<<< HEAD
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
=======
function Work() {
    
    const [tag, setTag] = useState('all');

    const activeClass = (activeTag) => {
        if(activeTag === tag) {
            return 'bg-white border-green-500 text-green-500 border-green-500'
        } else {
            return 'bg-green-500 border-green-500'
        }
    }

    return (
        <div className="grid grid-cols-4">
            {portfolioItems.map(a => <PortfolioEntry data={a} />)}
        </div>
>>>>>>> b109c8026e79c8da80ec9b3d499d45ae914f8580
    )
}

export default Work