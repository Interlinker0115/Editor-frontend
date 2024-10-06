"use client"
import Image from "next/image"
import Button from "@mui/material/Button"
import { useRouter } from "next/navigation"
const Confirm = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="mt-0 sm:mt-[10px] md:mt-[30px] p-2 text-[#FF8A00] text-[12px] sm:text-[14px] md:text-[18px] tracking-wider text-center uppercase">- UPLOAD DOCUMENT -</p>
            <h2 className="mt-0 sm:mt-[10px] md:mt-[30px] mb-7 font-bold leading-none text-center text-[30px] sm:text-[32px] md:text-[36px]">Purchase Credits</h2>
            <div className="w-[85%] xl:w-[80%] px-[10px] sm:px-[12px] xl:px-[20px] bg-[#0D6EFD] bg-opacity-15  rounded-[14px] mb-[20px]">
                <div className="flex justify-between mt-[20px]">
                    <div>
                        <Image
                            src={require("../../../../public/preview.png")}
                            alt="preview"
                            className="w-[26px] h-[26px] "
                            onClick={() => router.push("/payment/pay")}
                        />
                    </div>
                    <div>
                        <Image
                            src={require("../../../../public/cancel.png")}
                            alt="cancel"
                            className="w-[25px] h-[25px] "
                            onClick={() => router.push("/")}
                        />
                    </div>
                </div>
                <div className="xl-[20px] md:xl-[60px] xl:mx-[100px] mb-[80px] flex flex-col items-center mt-[20px] text-[32px] text-black font-semibold">
                    <div className="text-[28px] sm:text-[36px] md:text-[48px]">Make Payment</div>
                    <div className="w-[230px] sm:w-[300px] xl:w-[400px] px-8 py-4">
                        <div className="relative flex items-center justify-between w-full">
                            <div className="absolute h-1.5 w-full bg-[#0D6EFD] "></div>
                            <div
                                className="z-10  w-[36px] sm:w-[38px] md:w-[40px] h-[36px] sm:h-[38px] md:h-[40px] font-bold text-white bg-gray-600 rounded-full flex justify-center items-center">
                                1
                            </div>
                            <div
                                className="z-10  w-[36px] sm:w-[38px] md:w-[40px] h-[36px] sm:h-[38px] md:h-[40px] font-bold text-white bg-[#0D6EFD] rounded-full flex justify-center items-center">
                                2
                            </div>
                            <div
                                className="z-10  w-[36px] sm:w-[38px] md:w-[40px] h-[36px] sm:h-[38px] md:h-[40px] font-bold text-white bg-gray-600 rounded-full flex justify-center items-center">
                                3
                            </div>
                        </div>
                    </div>
                    <div className="flex xl:flex-row flex-col w-full justify-between gap-4 h-fit">
                        <div className="xl:w-1/2 w-full flex justify-center ">
                            <Image
                                src={require("../../../../public/card1.png")}
                                alt="card1"
                                className="w-[360px] md:w-[400px] h-[200px] md:h-[240px]"
                                priority
                            />
                        </div>
                        <div className="xl:w-1/2 w-full">
                            <input type="string" className="w-full h-[44px] sm:h-[48px] md:h-[56px] border border-black rounded-[8px] mt-[15px] pl-[10px] text-[16px] text-black" placeholder="Card Number"></input>
                            <div className="flex gap-4">
                                <input type="string" className="w-1/2 h-[44px] sm:h-[48px] md:h-[56px] border border-black rounded-[8px] mt-[15px] pl-[10px] text-[16px] text-black" placeholder="Expiry "></input>
                                <input type="string" className="w-1/2 h-[44px] sm:h-[48px] md:h-[56px] border border-black rounded-[8px] mt-[15px] pl-[10px] text-[16px] text-black" placeholder="CVV"></input>
                            </div>
                            <input type="string" className="w-full h-[44px] sm:h-[48px] md:h-[56px] border border-black rounded-[8px] mt-[15px] pl-[10px] text-[16px] text-black" placeholder="Holder Number"></input>
                            <div className="flex mt-[32px] gap-5 items-center">
                                <input type="checkbox" className="mr-[10px] w-[20px] md:w-[24px] h-[20px] md:h-[24px]"></input>
                                <div className="text-[#0D6EFD] text-[16px]">Save this credit card</div>

                            </div>
                            <div className="flex justify-center mt-[90px]">
                                <button className="w-[180px] sm:w-[200px] md:w-[240px] h-[44px] sm:h-[48px] md:h-[54px] bg-[#0D6EFD] text-[16px] sm:text-[18px] md:text-[20px] text-white text-bold rounded-full" onClick={() => router.push("/payment/complete")}>Go to Payment</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    )
}
export default Confirm