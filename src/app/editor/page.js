"use client"
import Image from "next/image"
const Editor = () => {
    return (
        <div className="flex flex-col xl:flex-row w-full px-[5px] md:px-[30px] xl:px-[60px] gap-5 items-center">
            <div className="w-[85%] xl:w-[60%] rounded-[16px] border-[1px] border-black border-solid h-[73vh] mt-[15px] mb-[5px]">
                <div className="flex justify-center text-[#FF8A00] text-[30px] md:text-[40px] xl:text-[60px] 2xl:text-[80px] mt-[40px] text-center">Show the HTML file</div>

            </div>
            <div className="w-[85%] xl:w-[40%] rounded-[16px] border-[1px] border-black border-solid h-[73vh] mt-[15px] mb-[10px]">
                <div className="flex justify-center text-[#0D6EFD] text-[30px] xl:text-[40px] 2xl:text-[50px] mt-[60px]">Editor</div>

            </div>
        </div>
    )
}
export default Editor