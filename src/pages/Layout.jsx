import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Layout = () => {
    return (
       <div className="app">
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Layout