"use client"
import Button from "@mui/material/Button"
import { useEffect, useState } from "react"
// import "./header.css"
import { useRouter } from "next/navigation"
const SubHeader = () => {
    const router = useRouter();
    const [show, setShow] = useState(false)
    const [animation, setAnimation] = useState(true)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    window.onclick = function (e) {
        const id = document.getElementById("modal")
        if (id === e.target) {
            setShow(false)
        }
    }
    useEffect(() => {
        setAnimation(!animation)
    }, [show])
    return (
        <div className="top-0 w-full">
            <div className="flex relative bg-black items-center justify-between h-[80px] xl:px-[145px] lg:px-[50px] md:px-[40px] sm:px-[30px] px-[10px]">
                <div className="w-[117px] h-[50px] border-white border-[1px] border-solid text-white items-center justify-center">Logo</div>


                <div className="hidden lg:block">
                    <div className="flex gap-16">
                        <a href="/#innovation" className="text-white font-bold text-[18px] hover:text-[#0D6EFD] hover:underline">Home</a>
                        <a href="/#future" className="text-white font-bold text-[18px] hover:text-[#0D6EFD] hover:underline">Features</a>
                        <a href="/#step" className="text-white font-bold text-[18px] hover:text-[#0D6EFD] hover:underline">How to use</a>
                        <a href="/#pricing" className="text-white font-bold text-[18px] hover:text-[#0D6EFD] hover:underline">Pricing</a>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Button variant="contained" sx={{ borderRadius: "100px", backgroundColor: "#0D6EFD", color: "white", width: "154px", height: "54px" }} onClick={() => router.push("/payment/pay")}>buy credit</Button>
                </div>
                <div className="block lg:hidden text-white text-[30px] font-bold" onClick={() => setShow(!show)}>
                    {show ? "X" : "☰"}
                </div>

                {show && (
                    <>
                        <div id="modal" className="w-full h-full top-0 left-0 fixed z-10 bg-[#0000008e]">
                        </div>
                        <div className={`absolute top-[80px] ${animation ? "h-[400px]" : "h-0"} duration-500 overflow-hidden left-0 flex flex-col w-full px-4 gap-y-5  bg-[#0D6EFD]  text-white font-bold text-[20px] z-20`}>
                            <a href="/#innovation" className="text-white mt-10" onClick={() => setShow(false)}>
                                Home
                            </a>
                            <a href="/#future" className="text-white" onClick={() => setShow(false)}>
                                Features
                            </a>
                            <a href="/#step" className="text-white" onClick={() => setShow(false)}>
                                How to use
                            </a>
                            <a href="/#pricing" className="text-white" onClick={() => setShow(false)}>
                                Pricing
                            </a>
                            <a href="/#contact" className="text-white" onClick={() => setShow(false)}>
                                Contact
                            </a>

                            <div
                                className="hover:cursor-pointer"
                                onClick={() => router.push("/login")}
                            >
                                Sign In
                            </div>
                            <div
                                className="hover:cursor-pointer"
                                onClick={() => router.push("/signup")}
                            >
                                Sing Up
                            </div>
                        </div>
                    </>
                )}

            </div>

        </div>
    )
}
export default SubHeader