import Upload from "../component/upload/upload"
import Footer from "../component/footer/footer"
import SubHeader from "../component/subheader/subheader"

const FreeUpload = () => {
    return (
        <div className="w-full h-svh flex flex-col justify-between">
            <SubHeader />
            <Upload />
            <Footer />

        </div>

    )
}
export default FreeUpload