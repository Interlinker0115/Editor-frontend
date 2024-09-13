import Image from "next/image";
import Button from "@mui/material/Button"




const Step = () => {
    return (
        <div className="container w-full mt-8 xl:mt-[41px] mb-[30px] md:mb-[50px] xl:mb-[108px] 2xl:px-[145px]" id="step">
            <div className="flex flex-col items-center">
                <div className="text-[#FF8A00] text-[12px] sm:text-[14px] md:text-[18px]">- HOW TO USE -</div>
                <div className="mt-[10px] text-black text-[28px] sm:text-[36px] md:text-[48px] font-bold text-center">3 Steps To Repair Corrupted Files</div>
            </div>
            <div className="mt-[30px] md:mt-[50px] xl:mt-[97px] grid xl:grid-cols-3 lg:grid-cols-2 gap-10">
                <div className="flex flex-col items-center w-full text-center">
                    <Image
                        src="/s-1.png"
                        alt="background"
                        width={380}
                        height={256}
                        style={{
                            objectFit: 'cover',
                            zIndex: -1,
                        }}
                    />
                    <div className="mt-[10px] text-[24px] font-bold text-black">upload Your Document</div>
                    <div className="block xl:hidden mt-[20px]">
                        <Button variant="contained" sx={{
                            borderRadius: "100px", backgroundColor: "#0D6EFD", color: "white",
                            width: {
                                xs: "150px",
                                sm: "180px",
                                md: "220px",
                            }, height: {
                                xs: "44px",
                                sm: "48px",
                                md: "54px",
                            },
                            fontSize: {
                                xs: "14px",
                                sm: "16px",  // Small screens
                                md: "18px",  // Medium screens
                            },
                        }}>Step1</Button>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full text-center">
                    <Image
                        src="/s-2.png"
                        alt="background"
                        width={380}
                        height={256}
                        style={{
                            objectFit: 'cover',
                            zIndex: -1,
                        }}
                    />
                    <div className="mt-[10px] text-[24px] font-bold text-black">Automatic Scan</div>
                    <div className="block xl:hidden mt-[20px]">
                        <Button variant="contained" sx={{
                            borderRadius: "100px", backgroundColor: "#0D6EFD", color: "white",
                            width: {
                                xs: "150px",
                                sm: "180px",
                                md: "220px",
                            }, height: {
                                xs: "44px",
                                sm: "48px",
                                md: "54px",
                            },
                            fontSize: {
                                xs: "14px",
                                sm: "16px",  // Small screens
                                md: "18px",  // Medium screens
                            },
                        }}>Step2</Button>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full text-center">
                    <Image
                        src="/s-3.png"
                        alt="background"
                        width={380}
                        height={256}
                        style={{
                            objectFit: 'cover',
                            zIndex: -1,
                        }}
                    />
                    <div className="mt-[10px] text-[24px] font-bold text-black">Check and Save</div>
                    <div className="block xl:hidden mt-[20px]">
                        <Button variant="contained" sx={{
                            borderRadius: "100px", backgroundColor: "#0D6EFD", color: "white",
                            width: {
                                xs: "150px",
                                sm: "180px",
                                md: "220px",
                            }, height: {
                                xs: "44px",
                                sm: "48px",
                                md: "54px",
                            },
                            fontSize: {
                                xs: "14px",
                                sm: "16px",  // Small screens
                                md: "18px",  // Medium screens
                            },
                        }}>Step3</Button>
                    </div>
                </div>
            </div>
            <div className="xl:block hidden">
                <div className="mt-[23px] h-[124px] w-full rounded-[100px] xl:border-[#0D6EFD] border-white border flex justify-around items-center">
                    <div className="absolute xl:block hidden">
                        <Image
                            src="/l-1.png"
                            alt="background"
                            width={850}
                            height={230}
                            className="w-[850px]"
                        />
                    </div>
                    <Button variant="contained" sx={{ borderRadius: "100px", backgroundColor: "#0D6EFD", color: "white", width: "220px", height: "68px", fontSize: "24px", }}>Step1</Button>
                    <Button variant="contained" sx={{ borderRadius: "100px", backgroundColor: "#0D6EFD", color: "white", width: "220px", height: "68px", fontSize: "24px", }}>Step2</Button>
                    <Button variant="contained" sx={{ borderRadius: "100px", backgroundColor: "#0D6EFD", color: "white", width: "220px", height: "68px", fontSize: "24px", }}>Step3</Button>
                </div>
            </div>
        </div>
    )
}
export default Step


