import Heading from "@tmp/components/heading";

const PortfolioItem = ({data}) => {

    const {heading, tags, introduction, brief, conclusion, images, ctas} = data;

    return (
        <div className="">
            <div className="mb-10">
                <Heading tag="h1">{heading}</Heading>
            </div>
            <p className="text-slate-600 font-bold">{introduction}</p>
            <div className="grid grid-cols-3 gap-4 my-10">
                {images.map(a => (
                    <div className="col-span-1 w-full h-96 bg-cover bg-no-repeat" style={{backgroundImage: `url(${a})`}}></div>
                ))}
            </div>
            <p className="mb-10 text-slate-600">{brief}</p>
            <div className="bg-green-500 p-10 text-white font-bold mb-10">
                <Heading tag="h2">Conclusion</Heading>
                <p className="mt-2">{conclusion}</p>
            </div>
            <div className="flex gap-4">
                {ctas.map(a => (
                    <a className="px-5 py-3 bg-white-500 uppercase font-bold text-green-500 rounded-md border-4 border-green-500 hover:bg-green-500 hover:text-white transition-all" href={a.href} target="_blank">{a.label}</a>
                ))}
            </div>
        </div>
    )
}

export default PortfolioItem;