import Heading from '../components/shared/Heading';
import Section from '../components/shared/Section';
import Gallery from '../components/shared/Gallery';
import { portfolio } from '../routes';

const PortfolioPage = () => {

    return (
        <div>
            <Section extraClasses="p-16 bg-stone-100">
                <Heading size={3} extraClasses="mb-4">Portfolio</Heading>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet massa massa. Nulla tristique pulvinar erat, eget aliquet sapien tempor sit amet.</p>
            </Section>
            <Gallery images={portfolio} />
        </div>
    )
}

export default PortfolioPage;