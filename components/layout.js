import Navbar from "../components/navbar";

const Layout = ({ children }) => {
    return (
        <div className="flex bg-cover bg-right-bottom" style={{backgroundImage: 'url(https://images.pexels.com/photos/574283/pexels-photo-574283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)'}}>
            <Navbar />
            <div className="w-full h-screen bg-white bg-opacity-90 overflow-y-scroll max-w-5xl">
                {children}
            </div>
        </div>
    )
}

export default Layout;