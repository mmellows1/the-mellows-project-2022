import Link from "next/link";

export default ({data}) => {
    const {href, heading, tags, image} = data;
    return (
        <Link href={href}>
            <div className="cursor-pointer relative h-52 w-full bg-cover text-center text-white" style={{backgroundImage:`url(${image})`}}>
                <div className="absolute left-0 top-0 w-full h-full bg-black opacity-60">

                </div>
                <div className="absolute w-full top-1/2 -translate-y-1/2">
                    <h2 className="text-2xl font-bold">{heading}</h2>
                    <p className="text-sm font-bold uppercase">{tags.join(', ')}</p>
                </div>
            </div>
        </Link>
    )
}