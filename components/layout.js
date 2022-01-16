import Navbar from "../components/navbar";

const Layout = ({ children }) => {
    return (
        <div className="flex">
            <div className="shrink-0 grow-0 m basis-auto md:basis-72 p-2 md:p-5 px-2 md:px-6 bg-green-500 h-screen">
                <Navbar />
            </div>
            <div className="justify-self-stretch w-full h-screen bg-white overflow-y-scroll">
                {children}
            </div>
        </div>
    )
}

export default Layout;