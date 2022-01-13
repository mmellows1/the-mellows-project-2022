import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage, trackWindowScroll } from "react-lazy-load-image-component"
import { Link } from "react-router-dom";

const Gallery = ({ images, scrollPosition }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {images.map(a => (
            <Link to={a.href} className="group w-full h-56 overflow-y-hidden transition-all relative">
                <div className="absolute w-full h-full bg-opacity-10 bg-black top-0 left-0 z-10 group-hover:bg-opacity-80 transition-all">
                    <div className="absolute left-1/2 -bottom-full group-hover:bottom-1/2 -translate-x-1/2 translate-y-1/2 transition-all">
                        <h2 className="font-bold text-white text-center text-2xl">{a.title}</h2>
                        <p className="text-white text-sm text-center font-bold">{a.tags.filter(f => f !== 'all').toString().replace(",", " | ").toUpperCase()}</p>
                        <div className="flex justify-center gap-2 mt-2">
                            {a.icons.map(i => <FontAwesomeIcon icon={i} className="text-white" />)}
                        </div>
                    </div>
                </div>
                <LazyLoadImage placeholderSrc={a.src} alt={a.alt} effect="opacity" src={a.src} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-all group-hover:rotate-6" />
            </Link>
        ))}
    </div>
)

export default trackWindowScroll(Gallery);