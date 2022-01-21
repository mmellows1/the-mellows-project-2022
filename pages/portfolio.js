import Heading from "@tmp/components/heading";
import Section from "@tmp/components/section";
import Link from "next/link";
import { useState } from "react";
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
                </div>
            </div>
        </Link>
)}

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
    )
}

export default Work