"use client"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"



const Upload = () => {

    const router = useRouter();
    const [filename, setFilename] = useState("")
    const [files, setFiles] = useState([]);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFilename(file.name); // Set the file name in state
            setFiles([...files, file]);
        }
    }

    const handleRemoveFile = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
        setFilename(''); // Reset the file name
    };

    return (
        <div className="container flex flex-col items-center 2xl:px-[145px]">
            <div className="mt-0 sm:mt-0 md:mt-[10px] text-[#FF8A00] text-[12px] sm:text-[14px] md:text-[18px] xl:text-[20px] 2xl:text-[22px]">- Upload Document -</div>
            <div className="mt-[30px] sm:mt-[20px] xl:mt-[10px] text-black text-[28px] sm:text-[36px] md:text-[48px] font-bold max-w-[646px] text-center">Upload Your Document</div>
            <div className="mt-[60px] sm:mt-[50px] xl:mt-[30px] w-[80%] sm:w-[60%] md:w-[80%] lg:w-[60%] 2xl:h-[400px] xl:h-[360px] md:h-[300px] h-[240px] rounded-[32px] border-dotted border-[#0D6EFD] border-[3px] bg-[#0D6EFD] bg-opacity-10 flex flex-col items-center justify-center">
                <div className="mt-[10px] flex items-center justify-center w-[160px] h-[160px] rounded-full bg-[#0D6EFD] bg-opacity-10">
                    <div className=" relative flex justify-center items-center w-[110px] h-[110px] rounded-full bg-[#0D6EFD] bg-opacity-30">
                        <input id="file" type="file" className=" absolute top-0 lef-0  w-full h-full hidden" onChange={handleChange} />
                        <label htmlFor="file">
                            <Image
                                src={require("../../../../public/plus.png")}
                                alt="plus"
                                className=" rounded-full w-[68px] h-[68px]"
                            /></label>

                    </div>

                </div>
                <div className="mt-[10px] text-[24px] sm:text-[28px] md:text-[36px] font-bold text-center">Upload File</div>
            </div>
            {filename && (
                <div className="file-name mt-[20px] flex justify-between gap-4 sm:gap-8 md:gap-14 items-center">
                    <div className="text-[18px] font-bold">Uploaded File:<span className="text-[#0D6EFD] ml-[5px]">{filename}</span> </div>
                    <button onClick={() => handleRemoveFile(files.indexOf(files.find(file => file.name === filename)))}>
                        <Image
                            src="/remove.png"
                            width={32}
                            height={32}
                            alt="remove"
                        />
                    </button>
                </div>
            )}
            {/* {files.length > 1 && (
                <div className="uploaded-files">
                    <p>Other Uploaded Files:</p>
                    <ul>
                        {files.map((file, index) => (
                            file.name !== filename && (
                                <li key={index}>
                                    {file.name}
                                    <button onClick={() => handleRemoveFile(index)}>
                                        Remove
                                    </button>
                                </li>
                            )
                        ))}
                    </ul>
                </div>
            )} */}
            <button className="mt-[30px] mb-[20px] w-[180px] sm:w-[200px] md:w-[240px] h-[44px] sm:h-[48px] md:h-[54px] bg-[#0D6EFD] text-[16px] sm:text-[18px] md:text-[20px] text-white text-bold rounded-full" onClick={() => router.push("/editor")}>Edit file</button>
        </div>
    )
}
export default Upload