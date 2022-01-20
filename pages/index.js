import { faCss3, faGoogle, faHtml5, faJs, faNode, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PortfolioEntry from '@tmp/components/portfolio-entry'
import FadeIn from 'react-fade-in'
import me from '../assets/img/me.jpg'
import Heading from '../components/heading'


const getAge = (birthDate) => {
  var now = new Date();

  function isLeap(year) {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
  }

  // days since the birthdate    
  var days = Math.floor((now.getTime() - birthDate.getTime())/1000/60/60/24);
  var age = 0;
  // iterate the years
  for (var y = birthDate.getFullYear(); y <= now.getFullYear(); y++){
    var daysInYear = isLeap(y) ? 366 : 365;
    if (days >= daysInYear){
      days -= daysInYear;
      age++;
      // increment the age only if there are available enough days for the year.
    }
  }
  return age;
}

export const getStaticProps = async() => {

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
      age: getAge(new Date('July 23, 1991')),
      developerAge: getAge(new Date('2011')),
      professionalAge: getAge(new Date('2014')),
      portfolioItems
    }
  }
}

export default function Home(props) {
  
  const {age, developerAge, professionalAge, portfolioItems} = props;

  console.log(me)

  return (
    <div>
      <div className="bg-stone-100 p-10 md:flex md:flex-nowrap gap-4">
        <div>
          <div className="mb-4">
            <Heading tag="h2">The Mellows Project</Heading>
          </div>
          <p className="mb-4">My name is Matthew Mellows, I am a Web Developer from Surrey, I have been doing web and app development for {developerAge} years with {professionalAge} years professional experience.</p>
          <p>I have built React Applications and Wordpress websites for small, medium, large and enterprise businesses in a broad range of sectors. Please find my linked in for references at the bottom.</p>
        </div>
        <div className="basis-96">
          <img src={me.src} className="w-96"/>
        </div>
      </div>
      <div className="bg-stone-800 p-10 text-white">
        <div className="flex gap-4 mb-5">
            <div>
                <Heading tag="h3">What are my skill</Heading>
                <p>I have more than 8 live projects and can build anything, take a look at the skills I have.</p>
            </div>
        </div>
        <div className="grid md:grid-cols-3">
            <div className="p-0 md:p-4 mb-4">
                <FontAwesomeIcon icon={faJs} color="#f0db4f" size="2x" className="mb-2" />
                <Heading tag="h3">Javascript</Heading>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
            </div>
            <div className="p-0 md:p-4 mb-4">
                <FontAwesomeIcon icon={faWordpress} color="#21759b" size="2x" className="mb-2" />
                <Heading tag="h3">Wordpress</Heading>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
            </div>
            <div className="p-0 md:p-4 mb-4">
                <FontAwesomeIcon icon={faReact} color="#61DBFB" size="2x" className="mb-2" />
                <Heading tag="h3">React JS</Heading>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
            </div>
            <div className="p-0 md:p-4 mb-4">
                <FontAwesomeIcon icon={faNode} color="#6cc24a" size="2x" className="mb-2" />
                <Heading tag="h3">React JS and React Native</Heading>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
            </div>
            <div className="p-0 md:p-4 mb-4">
                <FontAwesomeIcon icon={faHtml5} color="#F16529" size="2x" className="mb-2 mr-2" />
                <FontAwesomeIcon icon={faCss3} color="#264de4" size="2x" className="mb-2" />
                <Heading tag="h3">HTML5 and CSS3</Heading>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
            </div>
            <div className="p-0 md:p-4 mb-4">
                <FontAwesomeIcon icon={faGoogle} color="#F16529" size="2x" className="mb-2 mr-2" />
                <Heading tag="h3">Google API Integrations</Heading>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit malesuada lacus non commodo.</p>
            </div>
        </div>
      </div>
      <div className="bg-stone-200 block">
          <div className="grid grid-cols-3">
            {portfolioItems.map(a => <PortfolioEntry data={a} />)}
          </div>
      </div>
    </div>
  )
}
