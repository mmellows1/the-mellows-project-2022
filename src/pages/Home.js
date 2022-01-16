import { faCss3Alt, faGoogle, faHtml5, faJs, faNodeJs, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleRight, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Button from '../components/shared/Button';
import Heading from '../components/shared/Heading';
import Section from '../components/shared/Section';
import Gallery from '../components/shared/Gallery';
import me from '../me.jpg';
import { portfolio } from '../routes';


const HomePage = () => {

    const [tag, setTag] = useState('all');
    return (
        <div>
            <Section extraClasses="p-5 bg-stone-100">
                <div className="flex md:flex-nowrap flex-wrap gap-4">
                    <div className="md:order-1 order-2">
                        <h1 className="text-5xl font-bold mb-2">Matthew Mellows</h1>
                        <h2 className="text-2xl mb-5">Full Stack Developer</h2>
                        <p className="text-sm mb-3">My name is Matthew Mellows, I am a Web Developer from Surrey, I have been doing web and app development for 8 years with 6 years professional experience. I have built React Applications and Wordpress websites for small, medium, large and enterprise businesses in a broad range of sectors. Please find my linked in for references at the bottom.</p>
                        <p className="text-sm">Whether you have an existing site or just want to gain an online presence I can help. I offer hosting, development, marketing and SEO to fit your digital requirements. My going rate is £30 per hour but in some cases I can do a fixed price for a project.</p>
                        <div className="flex flex-wrap md:flex-wrap gap-4 mt-4">
                            <Button color="secondary" size="sm" href="/portfolio" extraClasses="w-full md:w-auto">
                                <FontAwesomeIcon icon={faChevronCircleRight} className="text-white" /> View the portfolio
                            </Button>
                            <Button color="secondary" size="sm" href="/portfolio" extraClasses="w-full md:w-auto">
                                <FontAwesomeIcon icon={faFile} className="text-white" /> View resume
                            </Button>
                        </div>
                    </div>
                    <div className="grow-0 shrink-0 md:basis-52 basis-auto w-full md:order-2 order-1">
                        <img src={me} className="shadow-lg border-slate-100 border-8 w-96 mx-auto md:mb-0 mb-4" />
                    </div>
                </div>
            </Section>
            <Section extraClasses="p-5 bg-white">
                <div className="flex gap-4 mb-5">
                    <div>
                        <Heading color="primary" size={3} extraClasses="mb-5">What are my skill</Heading>
                        <p>I have more than 8 live projects and can build anything, take a look at the skills I have.</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2 md:gap-2">
                    <div className="p-0 md:p-4 mb-4">
                        <FontAwesomeIcon icon={faJs} color="#f0db4f" size="2x" className="mb-2" />
                        <Heading variant="h3" color="primary" size={2} borderSide="none" extraClasses="mb-5 pl-0 text-slate-700">Javascript</Heading>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
                    </div>
                    <div className="p-0 md:p-4 mb-4">
                        <FontAwesomeIcon icon={faWordpress} color="#21759b" size="2x" className="mb-2" />
                        <Heading variant="h3" color="primary" size={2} borderSide="none" extraClasses="mb-5 pl-0 text-slate-700">Wordpress</Heading>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
                    </div>
                    <div className="p-0 md:p-4 mb-4">
                        <FontAwesomeIcon icon={faReact} color="#61DBFB" size="2x" className="mb-2" />
                        <Heading variant="h3" color="primary" size={2} borderSide="none" extraClasses="mb-5 pl-0 text-slate-700">React JS</Heading>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
                    </div>
                    <div className="p-0 md:p-4 mb-4">
                        <FontAwesomeIcon icon={faNodeJs} color="#6cc24a" size="2x" className="mb-2" />
                        <Heading variant="h3" color="primary" size={2} borderSide="none" extraClasses="mb-5 pl-0 text-slate-700">React JS and React Native</Heading>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
                    </div>
                    <div className="p-0 md:p-4 mb-4">
                        <FontAwesomeIcon icon={faHtml5} color="#F16529" size="2x" className="mb-2 mr-2" />
                        <FontAwesomeIcon icon={faCss3Alt} color="#264de4" size="2x" className="mb-2" />
                        <Heading variant="h3" color="primary" size={2} borderSide="none" extraClasses="mb-5 pl-0 text-slate-700">HTML5 and CSS3</Heading>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
                    </div>
                    <div className="p-0 md:p-4 mb-4">
                        <FontAwesomeIcon icon={faGoogle} color="#F16529" size="2x" className="mb-2 mr-2" />
                        <Heading variant="h3" color="primary" size={2} borderSide="none" extraClasses="mb-5 pl-0 text-slate-700">Google API Integrations</Heading>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
                    </div>
                </div>
            </Section>
            <Section extraClasses="bg-stone-100">
                <div className="w-full flex flex-wrap justify-items-stretch md:justify-center gap-4">
                    <Button color="primary" size="sm" onClick={() => setTag('all')} extraClasses={`w-full md:w-auto ${tag === 'all' ? "bg-green-500" : "bg-slate-200 text-black"}`}>All</Button>
                    <Button color="primary" size="sm" onClick={() => setTag('design')} extraClasses={`w-full md:w-auto ${tag === 'design' ? "bg-green-500" : "bg-slate-200 text-black"}`}>Design</Button>
                    <Button color="primary" size="sm" onClick={() => setTag('development')} extraClasses={`w-full md:w-auto ${tag === 'development' ? "bg-green-500" : "bg-slate-200 text-black"}`}>Development</Button>
                </div>
            </Section>
            <Gallery images={portfolio.filter(a => a.tags.includes(tag))} />
        </div>
    )
}

export default HomePage;