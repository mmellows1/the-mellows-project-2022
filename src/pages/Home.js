import { faCss3, faCss3Alt, faHtml5, faJs, faNodeJs, faReact, faWordpress, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleRight, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import Button from '../components/shared/Button';
import Heading from '../components/shared/Heading';
import Section from '../components/shared/Section';
import me from '../me.jpg';

import Gallery from '../components/utilities/LazyLoadImage'
import { useState } from 'react';


const HomePage = () => {

    const [tag, setTag] = useState('all');
    const portfolio = [
        {
            title: '88 Days',
            alt: 'Hello this is an image',
            src: 'images/1.jpg',
            tags: ['all', 'design', 'development'],
            href: '/portfolio/1',
            icons: [faHtml5, faCss3Alt, faGoogle, faNodeJs]
        },
        {
            title: 'Mimi\'s',
            alt: 'Hello this is an image',
            src: 'images/2.jpg',
            tags: ['all', 'design', 'development'],
            href: '/portfolio/2',
            icons: [faHtml5, faCss3, faGoogle, faWordpress]
        },
        {
            title: 'Cakes and Bakes',
            alt: 'Hello this is an image',
            src: 'images/3.jpg',
            tags: ['all', 'design'],
            href: '/portfolio/3',
            icons: [faHtml5, faCss3, faWordpress]
        },
        {
            title: 'Pet Pals',
            alt: 'Hello this is an image',
            src: 'images/4.jpg',
            tags: ['all', 'development', 'design'],
            href: '/portfolio/4',
            icons: [faGoogle, faHtml5]
        },
    ]
    return (
        <div>
            <Section extraClasses="p-16 bg-stone-100">
                <div className="flex md:flex-nowrap flex-wrap gap-4">
                    <div className="md:order-1 order-2">
                        <h1 className="text-5xl font-bold mb-2">Matthew Mellows</h1>
                        <h2 className="text-2xl mb-5">Full Stack Developer</h2>
                        <p className="text-sm mb-3">My name is Matthew Mellows, I am a Web Developer from Surrey, I have been doing web and app development for 8 years with 6 years professional experience. I have built React Applications and Wordpress websites for small, medium, large and enterprise businesses in a broad range of sectors. Please find my linked in for references at the bottom.</p>
                        <p className="text-sm">Whether you have an existing site or just want to gain an online presence I can help. I offer hosting, development, marketing and SEO to fit your digital requirements. My going rate is £30 per hour but in some cases I can do a fixed price for a project.</p>
                        <div className="flex gap-4 mt-4">
                            <Button color="secondary" size="sm" href="/portfolio">
                                <FontAwesomeIcon icon={faChevronCircleRight} className="text-white" /> View the portfolio
                            </Button>
                            <Button color="secondary" size="sm" href="/portfolio">
                                <FontAwesomeIcon icon={faFile} className="text-white" /> View resume
                            </Button>
                        </div>
                    </div>
                    <div className="grow-0 shrink-0 md:basis-52 basis-auto w-full md:order-2 order-1">
                        <img src={me} className="shadow-lg border-slate-100 border-8 w-96 mx-auto md:mb-0 mb-4" />
                    </div>
                </div>
            </Section>
            <Section extraClasses="p-16 bg-white">
                <div className="flex gap-4 mb-5">
                    <div>
                        <Heading variant="h1" color="primary" size={4} extraClasses="mb-5">What are my skill</Heading>
                        <p>I have more than 8 live projects and can build anything, take a look at the skills I have.</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="p-4 col-span-2 md:col-span-1">
                        <FontAwesomeIcon icon={faJs} color="#f0db4f" size="2x" className="mb-2" />
                        <Heading variant="h3" color="primary" size={2} borderSide="none" extraClasses="mb-5 pl-0 text-slate-700">Javascript</Heading>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
                    </div>
                    <div className="p-4 col-span-2 md:col-span-1">
                        <FontAwesomeIcon icon={faWordpress} color="#21759b" size="2x" className="mb-2" />
                        <Heading variant="h3" color="primary" size={2} borderSide="none" extraClasses="mb-5 pl-0 text-slate-700">Wordpress</Heading>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
                    </div>
                    <div className="p-4 col-span-2 md:col-span-1">
                        <FontAwesomeIcon icon={faReact} color="#61DBFB" size="2x" className="mb-2" />
                        <Heading variant="h3" color="primary" size={2} borderSide="none" extraClasses="mb-5 pl-0 text-slate-700">React JS</Heading>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
                    </div>
                    <div className="p-4 col-span-2 md:col-span-1">
                        <FontAwesomeIcon icon={faNodeJs} color="#6cc24a" size="2x" className="mb-2" />
                        <Heading variant="h3" color="primary" size={2} borderSide="none" extraClasses="mb-5 pl-0 text-slate-700">React JS and React Native</Heading>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
                    </div>
                    <div className="p-4 col-span-2 md:col-span-1">
                        <FontAwesomeIcon icon={faHtml5} color="#F16529" size="2x" className="mb-2 mr-2" />
                        <FontAwesomeIcon icon={faCss3Alt} color="#264de4" size="2x" className="mb-2" />
                        <Heading variant="h3" color="primary" size={2} borderSide="none" extraClasses="mb-5 pl-0 text-slate-700">HTML5 and CSS3</Heading>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
                    </div>
                    <div className="p-4 col-span-2 md:col-span-1">
                        <FontAwesomeIcon icon={faGoogle} color="#F16529" size="2x" className="mb-2 mr-2" />
                        <Heading variant="h3" color="primary" size={2} borderSide="none" extraClasses="mb-5 pl-0 text-slate-700">Google API Integrations</Heading>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
                    </div>
                </div>
            </Section>
            <Section extraClasses="p-0 bg-stone-100">
                <div className="py-5 w-full flex justify-center gap-4">
                    <Button color="primary" size="sm" onClick={() => setTag('all')} extraClasses={`${tag === 'all' ? "bg-green-500" : "bg-slate-200 text-black"}`}>All</Button>
                    <Button color="primary" size="sm" onClick={() => setTag('design')} extraClasses={`${tag === 'design' ? "bg-green-500" : "bg-slate-200 text-black"}`}>Design</Button>
                    <Button color="primary" size="sm" onClick={() => setTag('development')} extraClasses={`${tag === 'development' ? "bg-green-500" : "bg-slate-200 text-black"}`}>Development</Button>
                </div>
                {<Gallery images={portfolio.filter(a => a.tags.includes(tag))} />}
            </Section>
        </div>
    )
}

export default HomePage;