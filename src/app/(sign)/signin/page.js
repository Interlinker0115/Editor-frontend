"use client"
import Image from "next/image"
import { Form, Input, Checkbox } from "antd"
import Button from "@mui/material/Button"
import Link from "next/link"
import login from "/public/login.png"
import google from "/public/google.png"
import apple from "/public/apple.png"
import facebook from "/public/facebook.png"
import { useRouter } from "next/navigation"
const Login = () => {

    const router = useRouter();

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
                        <div className="w-full text-[42px] font-bold text-black">SignIn</div>
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
                        <Form.Item
                            name={["password"]}
                            rules={[{ required: true, type: "string" }]}
                            className="w-full mt-[40px]"
                        >
                            <Input.Password type="password" size="large" placeholder="New Password" />
                        </Form.Item>

                        <div className="mb-5 flex w-full flex-col justify-between sm:flex-row">

                            <div className="flex items-center gap-2">
                                <Link href="/forgot" className="text-[18px] underline font-bold pl-[5px] hover:text-[#0D6EFD]">Forgot Password</Link>
                            </div>

                        </div>
                        <div className="mt-[20px]">
                            <Button variant="contained" sx={{ borderRadius: "100px", backgroundColor: "#0D6EFD", color: "white", width: "100%", height: "50px", fontSize: "18px" }} onClick={() => router.push("/freeupload")}>Get Started</Button>
                        </div>
                        <div className="flex justify-center gap-10 mt-[20px]">
                            <button><Image
                                src={google}
                                alt="google"
                                width={60}
                            /></button>
                            <button><Image
                                src={facebook}
                                alt="facebook"
                                width={60}
                            /></button>
                            <button><Image
                                src={apple}
                                alt="apple"
                                width={60}
                            /></button>
                        </div>
                        <div className="mt-[30px] float-start">
                            {`Don't have an account?`}{"  "}
                            <Link href="/signup" className="text-[18px] underline font-bold pl-[5px] hover:text-[#0D6EFD]">
                                SignUp
                            </Link>
                        </div>
                    </Form>
                </div>

            </div>
        </div>

    )
}
export default Login