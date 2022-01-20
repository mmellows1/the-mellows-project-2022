import Heading from "@tmp/components/heading";
import Section from "@tmp/components/section";
import Grid from "@tmp/components/grid";
import PortfolioItem from "@tmp/components/portfolio-item";

export default () => {

    const data = {
        heading: '88 Days',
        introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien erat, rutrum et feugiat sed, aliquam sit amet mi. Donec sem mi, volutpat vel cursus in, pellentesque mattis diam.',
        brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien erat, rutrum et feugiat sed, aliquam sit amet mi. Donec sem mi, volutpat vel cursus in, pellentesque mattis diam.',
        conclusion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien erat, rutrum et feugiat sed, aliquam sit amet mi. Donec sem mi, volutpat vel cursus in, pellentesque mattis diam.',
        images: [
            'https://images.pexels.com/photos/10293356/pexels-photo-10293356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/10293356/pexels-photo-10293356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/10293356/pexels-photo-10293356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        ],
        ctas: [
            {
                label: "Go to Github",
                href: "https://github.com/mmellows1/88-days-calculator"
            },
            {
                label: "Go to app",
                href: "https://days-calculator-27367.firebaseapp.com/"
            },
        ]
    }

    return (
        <div className="md:col-span-2">
            <Section>
                <PortfolioItem data={data}/>
            </Section>
        </div>
    )
}