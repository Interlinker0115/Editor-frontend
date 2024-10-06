"use client"
import Image from "next/image"
import { Form, Input } from "antd"
import Button from "@mui/material/Button"
import login from "/public/login.png"
import Link from "next/link"
const Forgot = () => {

    const validateMessage = {
        required: "${label} is required!",
        types: {
            email: "${label} is not a valid email!"
        }
    }
    const onFinish = (value) => {
        console.log(value)
    }
    return (
        <div className="w-full h-full">
            <div className="xl:block hidden">
                <Image
                    src={login}
                    alt="background"
                    className="w-full h-full -z-10 absolute"
                />
            </div>
            <div className="w-full xl:w-1/2 h-screen flex justify-center items-center">
                <div className="w-[80%] lg:w-[60%] xl:w-[80%] 2xl:w-[60%]">
                    <Form
                        name="nest-message"
                        layout="vertical"
                        onFinish={onFinish}
                        validateMessages={validateMessage}
                        className="text-center"
                    >
                        <div className="w-full text-[42px] font-bold text-black">Forgot Password</div>
                        <div className="w-full text-[20px] font-normal text-black mt-[30px]">Enter an email id associated with your account</div>
                        <Form.Item
                            name={['email']}
                            rules={[
                                {
                                    required: true,
                                    type: 'email',
                                },
                            ]}
                            className="mt-[30px]"
                        >
                            <Input type="email" size="large" placeholder="Email" />
                        </Form.Item>
                        <div className="mt-[40px]">
                            <Button variant="contained" sx={{ borderRadius: "100px", backgroundColor: "#0D6EFD", color: "white", width: "100%", height: "50px", fontSize: "18px" }}>Reset Password</Button>
                        </div>
                        <div className=" float-start mt-[30px] text-[18px] underline font-bold pl-[5px] hover:text-[#0D6EFD]"><Link href={"/signin"}> Go to SignIn</Link >
                        </div>
                    </Form>
                </div>

            </div>
        </div>

    )
}
export default Forgot