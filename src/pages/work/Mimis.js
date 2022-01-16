import { faCss3Alt, faHtml5, faWordpress } from "@fortawesome/free-brands-svg-icons";
import Heading from "../../components/shared/Heading";
import PortfolioItem from "../../components/shared/PortfolioItem";
import Section from "../../components/shared/Section";

const Mimis = () => {

    const content = {
        heading: 'Mimis',
        tags: ['design', 'development', 'wordpress'],
        category: 'Development',
        languageIcons: [faHtml5, faCss3Alt, faWordpress],
        content: {
            intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus egestas turpis in commodo. Curabitur eu fermentum neque. Morbi pulvinar consequat dolor quis placerat. Cras vestibulum, dolor eu ullamcorper tincidunt, ex ipsum scelerisque turpis, vitae mollis leo lectus efficitur diam. Vestibulum tempus dignissim justo, at tempus dolor pretium id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat dolor lectus, vitae porta nisi ultricies at. Vestibulum ac tempor justo. Proin mi lectus, placerat at pellentesque ac, porta id mi. Duis ac nulla sit amet ante aliquet dictum. Donec condimentum consectetur purus, eget pharetra quam euismod ac.',
            brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus egestas turpis in commodo. Curabitur eu fermentum neque. Morbi pulvinar consequat dolor quis placerat. Cras vestibulum, dolor eu ullamcorper tincidunt, ex ipsum scelerisque turpis, vitae mollis leo lectus efficitur diam. Vestibulum tempus dignissim justo, at tempus dolor pretium id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat dolor lectus, vitae porta nisi ultricies at. Vestibulum ac tempor justo. Proin mi lectus, placerat at pellentesque ac, porta id mi. Duis ac nulla sit amet ante aliquet dictum. Donec condimentum consectetur purus, eget pharetra quam euismod ac.',
            conclusion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus egestas turpis in commodo. Curabitur eu fermentum neque. Morbi pulvinar consequat dolor quis placerat. Cras vestibulum, dolor eu ullamcorper tincidunt, ex ipsum scelerisque turpis, vitae mollis leo lectus efficitur diam. Vestibulum tempus dignissim justo, at tempus dolor pretium id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat dolor lectus, vitae porta nisi ultricies at. Vestibulum ac tempor justo. Proin mi lectus, placerat at pellentesque ac, porta id mi. Duis ac nulla sit amet ante aliquet dictum. Donec condimentum consectetur purus, eget pharetra quam euismod ac.'
        },
        images: [
            'https://dummyimage.com/600x400/000/fff',
            'https://dummyimage.com/600x400/000/fff',
            'https://dummyimage.com/600x400/000/fff',
        ],
        links: [
            {
                label: 'Go to the staging site',
                href: 'https://mimisweybridge.co.uk/staging/7631/'
            },
            {
                label: 'Go to the production site',
                href: 'https://mimisweybridge.co.uk/'
            },
        ]
    }

    return (
        <PortfolioItem data={content} />
    )
}

export default Mimis;