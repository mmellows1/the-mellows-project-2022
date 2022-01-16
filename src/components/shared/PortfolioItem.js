import Heading from "./Heading";
import SyntaxHighlighter from 'react-syntax-highlighter';
import syntax from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faGoogle, faHtml5, faJs, faJsSquare, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faFire, faListAlt, faTag } from "@fortawesome/free-solid-svg-icons";
import Section from "./Section";



const PortfolioItem = ({ data }) => {
    return (
        <Section extraClasses="bg-white" >
            <Heading size={3} extraClasses="mb-4" borderSide="none">{data.heading}</Heading>
            <div className="flex gap-8 items-center mb-10">
                <div className="flex gap-4 text-slate-800">
                    {data.languageIcons.map(a => <FontAwesomeIcon icon={a} className="text-slate-500" />)}
                </div>
                <div className="flex gap-2 items-center font-bold text-sm text-slate-500 uppercase">
                    <FontAwesomeIcon icon={faTag} />
                    {data.tags.toString().replaceAll(',', ' | ')}
                </div>
                <div className="flex gap-2 items-center font-bold text-sm text-slate-500 uppercase">
                    <FontAwesomeIcon icon={faListAlt} />
                    {data.category}
                </div>
            </div>
            <p className="text-sm">{data.content.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-10 my-10">
                {data.images.map(a => (
                    <div className="col-span-2 bg-slate-100 h-60 bg-cover bg-no-repeat rounded-md bg-center" style={{ backgroundImage: `url(${a})` }}></div>
                ))}
            </div>
            {
                data.content.brief && (
                    <>
                        <Heading size={3} extraClasses="mb-4">Brief</Heading>
                        <p className="text-sm mb-10">{data.content.brief}</p>
                    </>
                )
            }
            {
                data.content.conclusion && (
                    <>
                        <div className="bg-green-500 p-10 text-white mb-10">
                            <Heading size={3} extraClasses="mb-4" borderSide="none">Conclusions</Heading>
                            <p className="text-sm font-bold">{data.content.conclusion}</p>
                        </div>
                    </>
                )
            }
            {
                data.code && (
                    <ol className="my-10">
                        <Heading size={3} extraClasses="mb-4">Snippets</Heading>
                        {data.code.map((a, index) => (
                            <li className="mb-4">
                                <p className="mb-4 font-bold">{a.description}</p>
                                {a.code ? (
                                    <span className="w-full">
                                        <SyntaxHighlighter wrapLongLines language={a.language} style={syntax} children="">
                                            {a.code}
                                        </SyntaxHighlighter>
                                    </span>
                                ) : null}
                            </li>
                        ))}
                    </ol>
                )
            }
            {
                data.links && (
                    <div className="inline-block mb-10">
                        {data.links.map(a => (
                            <Button color="secondary" size="sm" href={a.href} extraClasses="mr-4" target="_blank">{a.label}</Button>
                        ))}
                    </div>
                )
            }
        </Section >
    )
}

export default PortfolioItem;