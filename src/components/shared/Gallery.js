import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Gallery = (props) => {
    const { images } = props;
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 bg-white" >
            {images.map(a => (
                <Link to={a.href} className="group w-full h-56 overflow-y-hidden relative">
                    <div className="absolute w-full h-full bg-opacity-10 bg-black top-0 left-0 z-10">
                        <div className="absolute w-full left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2 transition-all">
                            <h2 className="font-bold text-white text-center text-2xl">{a.title}</h2>
                            <p className="text-white text-sm text-center font-bold">{a.tags.filter(f => f !== 'all').toString().replace(",", " | ").toUpperCase()}</p>
                            <div className="flex justify-center gap-2 mt-2">
                                {a.icons.map(i => <FontAwesomeIcon icon={i} className="text-white" />)}
                            </div>
                        </div>
                    </div>
                    <div className="absolte left-0 top-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${a.src})` }}></div>
                </Link>
            ))}
        </div>
    )
}

export default Gallery;