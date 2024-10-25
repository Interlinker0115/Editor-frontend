"use client"
import Image from "next/image"
import { useRef } from "react"
const Contact = () => {
    const inputRef = useRef(null);
    const handleCopy = () => {
        if (inputRef.current) {
            inputRef.current.select(); // Select the input value
            document.execCommand("copy"); // Copy the selected text
            alert("Copied to clipboard!"); // Optional: Show an alert
        }
    }
    return (
        <div className="container flex flex-col items-center 2xl:px-[145px]">
            <div className="mt-[60px] sm:mt-[50px] xl:mt-[30px] w-[85%] sm:w-[65%] md:w-[85%] lg:w-[60%] 2xl:h-[360px] xl:h-[320px] md:h-[280px] h-[240px] rounded-[32px] border-dotted border-[#0D6EFD] border-[3px] bg-[#0D6EFD] bg-opacity-10 flex items-center">
                <div className="flex-1 relative w-full h-[300px]">
                    <Image
                        src={"/copy2.png"}
                        style={{ objectFit: 'contain' }}
                        fill
                        alt="copy"
                    />
                </div>
                <div className="flex flex-col flex-1 items-center py-[40px] px-[20px]">
                    <div className="font-bold text-[40px]">Contact Us</div>
                    <label htmlFor="fixed-input"></label>
                    <input ref={inputRef} className="w-[90%] text-center text-[22px] mt-[30px] rounded-md h-[50px] border-solid border-[2px] border-gray-500" id="fixed-input" defaultValue={"info@docuclever.ai"}></input>
                    <div className="w-[90%] bg-[#0D6EFD] rounded-md h-[50px] mt-[30px] flex items-center justify-center text-white font-semibold text-[22px] hover:cursor-pointer" onClick={handleCopy}>Copy</div>
                </div>
            </div>
        </div>
    )
}
export default Contact