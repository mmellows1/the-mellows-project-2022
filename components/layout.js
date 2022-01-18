import Navbar from "../components/navbar";

const Layout = ({ children }) => {
    return (
        <div className="flex bg-cover bg-right-bottom" style={{backgroundImage: 'url(https://images.pexels.com/photos/574283/pexels-photo-574283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)'}}>
            <div className="shrink-0 grow-0 m basis-auto md:basis-96 p-2 md:p-5 px-2 md:px-6 bg-green-500 bg-opacity-90 h-screen">
                <Navbar />
            </div>
            <div className="w-full h-screen bg-white bg-opacity-90 overflow-y-scroll max-w-5xl">
                {children}
            </div>
        </div>
    )
}

export default Layout;