"use client"
import Image from "next/image"
import Button from "@mui/material/Button"
import { useRouter } from "next/navigation"
const Pay = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="p-2 text-[#FF8A00] text-[12px] sm:text-[14px] md:text-[18px] tracking-wider text-center uppercase">- UPLOAD DOCUMENT -</p>
            <h2 className="mb-7 font-bold leading-none text-center text-[28px] sm:text-[36px] md:text-[36px]">Purchase Credits</h2>
            <div className="w-[85%] xl:w-[80%] px-[10px] sm:px-[12px] xl:px-[20px] bg-[#0D6EFD] bg-opacity-15  rounded-[14px] mb-[20px]">
                <div className="flex justify-between mt-[20px]">
                    <div >
                        <Image
                            src="/preview.png"
                            alt="preview"
                            width={26}
                            height={26}
                            onClick={() => router.push("/")}
                        />
                    </div>
                    <div>
                        <Image
                            src="/cancel.png"
                            alt="cancel"
                            width={25}
                            height={25}
                            onClick={() => router.push("/")}
                        />
                    </div>
                </div>
                <div className="mx-[20px] md:mx-[60px] xl:mx-[100px] mb-[40px] flex flex-col items-center mt-[20px] text-[32px] text-black font-semibold">
                    <div className="text-[28px] sm:text-[36px] md:text-[48px]">Make Payment</div>
                    <div className="w-[230px] sm:w-[300px] xl:w-[400px] px-8 py-4">
                        <div className="relative flex items-center justify-between w-full">
                            <div className="absolute h-1.5 w-full bg-[#0D6EFD] "></div>
                            <div
                                className="z-10 w-[36px] sm:w-[38px] md:w-[40px] h-[36px] sm:h-[38px] md:h-[40px] font-bold text-white bg-[#0D6EFD] rounded-full flex justify-center items-center">
                                1
                            </div>
                            <div
                                className="z-10 w-[36px] sm:w-[38px] md:w-[40px] h-[36px] sm:h-[38px] md:h-[40px] font-bold text-white bg-gray-600 rounded-full flex justify-center items-center">
                                2
                            </div>
                            <div
                                className="z-10 w-[36px] sm:w-[38px] md:w-[40px] h-[36px] sm:h-[38px] md:h-[40px] font-bold text-white bg-gray-600 rounded-full flex justify-center items-center">
                                3
                            </div>
                        </div>
                    </div>
                    <div className="flex xl:flex-row flex-col w-full justify-between gap-4 h-fit">
                        <div className="xl:w-1/2 w-full">
                            <div className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-black">Select Method of Payment</div>
                            <div className="h-[56px] w-full border border-solid border-[#0D6EFD] border-opacity-10 mt-[15px] bg-[#0D6EFD] bg-opacity-25 flex justify-between items-center">
                                <div>
                                    <Image
                                        src={require("../../../../public/card.png")}
                                        alt="card"
                                        className="w-[38px] md:w-[42px] h-[28px] md:h-[32px] ml-[10px]"
                                    />
                                </div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] font-bold">Credit Card Or Debit</div>
                                <input type="radio" name="selection" className="mr-[10px] w-[20px] md:w-[24px] h-[20px] md:h-[24px]"></input>
                            </div>
                            <div className="h-[56px] w-full border border-solid border-[#0D6EFD] border-opacity-10 bg-[#0D6EFD] bg-opacity-25 flex justify-between items-center">
                                <div>
                                    <Image
                                        src={require("../../../../public/paypal.png")}
                                        alt="paypal"
                                        className="w-[38px] md:w-[42px] h-[28px] md:h-[32px] ml-[10px]"
                                    />
                                </div>
                                <div className="text-[16px] md:text-[18px] xl:text-[20px] font-bold">Paypal</div>
                                <input type="radio" name="selection" className="mr-[10px] w-[20px] md:w-[24px] h-[20px] md:h-[24px]"></input>
                            </div>
                            <div className="mt-[80px]">
                                <div className="text-[16px] sm:text-[18px] md:text-[20px] font-bold ">Credit Number</div>
                                <input type="number" className="w-full h-[44px] sm:h-[48px] md:h-[56px] border border-black rounded-[8px] mt-[15px]"></input>

                            </div>
                        </div>
                        <div className="xl:w-1/2 w-full">
                            <div className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-black ">Review payment Amount </div>
                            <div className="flex justify-around mt-[20px]">
                                <div className="text-[16px] md:text-[20px] text-black text-opacity-60">For 10 credits</div>
                                <div className="text-[20px] md:text-[24px] text-black text-opacity-60">$12/Month</div>
                            </div>
                            <div className="w-[90%] h-[3px] bg-black float-end"></div>

                            <div className="flex justify-around mt-[5px]">
                                <div className="text-[24px] md:text-[28px] text-black font-bold">Total</div>
                                <div className="text-[24px] md:text-[28px] text-black font-bold">$12.00 USD</div>
                            </div>
                            <div className="flex justify-center mt-[90px]">
                                <button className="w-[180px] sm:w-[200px] md:w-[240px] h-[44px] sm:h-[48px] md:h-[54px] bg-[#0D6EFD] text-[16px] sm:text-[18px] md:text-[20px] text-white text-bold rounded-full" onClick={() => router.push("/payment/confirm")}>Go to Payment</button>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Pay