import Footer from "../component/footer/footer"
import SubHeader from "../component/subheader/subheader"
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col justify-between h-svh w-full">
            <SubHeader />
            {children}
            <Footer />
        </div>
    )
}
export default Layout