import PortfolioItem from "@tmp/components/portfolio-item";
import Section from "@tmp/components/section";


export default () => {

    const data = {
        heading: 'Mimis',
        introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien erat, rutrum et feugiat sed, aliquam sit amet mi. Donec sem mi, volutpat vel cursus in, pellentesque mattis diam.',
        brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien erat, rutrum et feugiat sed, aliquam sit amet mi. Donec sem mi, volutpat vel cursus in, pellentesque mattis diam.',
        conclusion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien erat, rutrum et feugiat sed, aliquam sit amet mi. Donec sem mi, volutpat vel cursus in, pellentesque mattis diam.',
        images: [
            'https://images.pexels.com/photos/10660662/pexels-photo-10660662.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/10660662/pexels-photo-10660662.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/10660662/pexels-photo-10660662.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
                <PortfolioItem data={data} />
            </Section>
        </div>
    )
}