import { faCss3Alt, faGoogle, faHtml5, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import Heading from "../../components/shared/Heading";
import PortfolioItem from "../../components/shared/PortfolioItem";
import Section from "../../components/shared/Section";

const EightyEightDaysCalculator = () => {

    const content = {
        heading: '88 Days Calculator',
        tags: ['design', 'development', 'google api'],
        category: 'Development',
        languageIcons: [faHtml5, faCss3Alt, faJs, faGoogle, faNodeJs],
        content: {
            intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus egestas turpis in commodo. Curabitur eu fermentum neque. Morbi pulvinar consequat dolor quis placerat. Cras vestibulum, dolor eu ullamcorper tincidunt, ex ipsum scelerisque turpis, vitae mollis leo lectus efficitur diam. Vestibulum tempus dignissim justo, at tempus dolor pretium id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat dolor lectus, vitae porta nisi ultricies at. Vestibulum ac tempor justo. Proin mi lectus, placerat at pellentesque ac, porta id mi. Duis ac nulla sit amet ante aliquet dictum. Donec condimentum consectetur purus, eget pharetra quam euismod ac.',
            brief: '',
            conclusion: ''
        },
        images: [
            'https://dummyimage.com/600x400/000/fff',
            'https://dummyimage.com/600x400/000/fff',
            'https://dummyimage.com/600x400/000/fff',
        ],
        code: [
            {
                description: 'Using process.env I was able to define all of the variables related to firebase and not store them in a git repository.',
                language: 'javascript',
                code: `
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DATABASE_URL,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
    };
                `
            },
            {
                description: 'Creating the firebase calls, I used promises that would return with a parsed firebase doc object',
                language: 'javascript',
                code: `
    export const getUser = async (uid) => {
        if (!uid) return null;
        return new Promise((resolve) => {
            firestore.doc('users/\${uid}').onSnapshot((userDocument) => {
                resolve({
                    uid,
                    ...userDocument.data(),
                });
            });
        });
    };             
                `
            }
        ],
        links: [
            {
                label: 'Go to the staging site',
                href: 'https://days-calculator-27367.firebaseapp.com/'
            }
        ]
    }

    return (
        <PortfolioItem data={content} />
    )
}

export default EightyEightDaysCalculator;