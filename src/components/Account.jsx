import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { uploadUserPic } from "../api/user/uploadPic";
import { getUser } from "../api/admin/users";
import { IoCamera } from "react-icons/io5";

const UploadModal = ({setModalOpen}) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    
    const queryClient = useQueryClient();
    const {mutate: uploadPic, isError, isSuccess, error} = useMutation({
        mutationFn: (formData) => uploadUserPic(formData),
        onSuccess: (res) => {
            console.log(res);
            queryClient.invalidateQueries({queryKey: ['users']});
            setIsLoading(false);
            setTimeout(() => {setModalOpen(false);}, 2000);
        },
        onError: (err) => {console.error('Upload failed :', err)}
    });

    const handleSelect = async (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    }

    const handleUpload = async () => {
        if (!selectedFile) return;
        const formData = new FormData();
        formData.append('selectedFile', selectedFile);
        setIsLoading(true);
        uploadPic(formData);
    }


    return (
        <div className="w-full h-full bg-black/5 backdrop-blur-sm fixed top-0 left-0 z-50 will-change-scroll">
            <div className="lg:w-96 w-11/12 mx-auto mt-40 rounded-[2rem] bg-white/25">
                <div className="flex justify-between items-center pt-4 pb-2 px-8">
                    <h2 className="text-xl text-white ">Upload your picture</h2>
                    <FaTimes className="text-2xl text-white cursor-pointer" onClick={() => setModalOpen(prev => !prev)} />
                </div>
                <hr className="w-10/12 mx-auto border border-white "/>
                {
                    isLoading ? (
                        <div className="w-full h-48 flex flex-col justify-center items-center text-white">
                            <div className="w-20 h-20 border-2 border-white border-b-transparent animate-spin rounded-full"></div>
                        </div>
                    ) :
                    isError ? (
                        <div className="w-full h-48 px-8 flex flex-col justify-center items-center text-white">
                            <div className="bg-red-300 rounded-2xl border-2 border-red-600 text-red-600 text-lg py-2 px-4">
                                Upload failed : {error.message}
                            </div>
                        </div>
                    ) :isSuccess ? (
                        <div className="w-full h-48 px-8 flex flex-col justify-center items-center text-white">
                            <div className="bg-green-300 rounded-2xl border-2 border-green-600 text-green-600 text-lg py-2 px-4">
                                Your picture uploaded successfully !
                            </div>
                        </div>
                    ) :
                    !selectedFile ? (
                        <div className="w-full h-48 flex flex-col justify-center items-center text-white">
                            <input type="file" id="picUpload" className="-left-[1000%] opacity-0" accept="image/png, image/jpg, image/jpeg" onChange={handleSelect} />
                            <label htmlFor="picUpload" className="w-8/12 h-32">
                                <FiUpload className="text-4xl p-2 w-full h-full cursor-pointer " />
                            </label>
                        </div>
                    ) : (
                        <div className="w-full h-48 flex flex-col justify-center items-center text-white">
                            <div className="w-full flex px-8 items-center justify-left">
                                <img src={URL.createObjectURL(selectedFile)} alt="Preview" className="w-32 h-32 overflow-hidden rounded-full" />
                                <div>
                                    <p className="pl-4 text-lg">{selectedFile.name?.slice(0,32)}</p>
                                    <p className="pl-4 text-sm text-white/80">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                                </div>
                            </div>
                            <div className="w-full mt-4 flex justify-end items-center px-8">
                                <button className="rounded-2xl py-1 px-4 bg-transparent border-2 border-white hover:bg-white hover:text-black" onClick={handleUpload}>Upload</button>
                            </div>
                        </div>
                    )
                }
                <hr className="w-10/12 mx-auto border border-white "/>
                <p className="text-sm text-white p-4 pt-2 pl-8">Please provide an squared PNG, JPG or JPEG picture.</p>
            </div>
        </div>
    )
}

const Account = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['users'],
        queryFn: () => getUser()
    });

    const {username, email, userProfilePic} = data || {};

  return (
    <section className='w-full h-full bg-[radial-gradient(#555,#333)] flex flex-col flex-wrap overflow-hidden'>
        <div className="w-full mx-auto mt-28 mb-24 flex justify-center items-center">
            <div className="lg:w-[80%] w-full lg:bg-white/20 mx-auto lg:rounded-[2rem] px-10 py-10 flex lg:flex-row flex-col">
                <div className="lg:w-1/3 w-full lg:pb-0 pb-4 lg:mb-0 mb-4 lg:border-b-0 border-b-2 lg:border-r-2 border-white/50 lg:pr-10">
                    <div className="w-48 h-48 mx-auto relative">
                        <div className="w-full h-full rounded-full border-8 border-gray-600 text-7xl font-bold bg-gray-400 flex items-center justify-center text-white">
                            {
                                userProfilePic ?
                                <img src={userProfilePic} alt={username} className="w-full h-full object-cover rounded-full"/> :
                                <IoCamera />
                            }
                        </div>
                        {!userProfilePic && <div className="absolute bg-white text-black/80 p-2 text-2xl rounded-full top-2 right-2 flex cursor-pointer">
                            <FaPlus onClick={() => setModalOpen(prev => !prev)}/>
                        </div>}
                    </div>
                    <h2 className="text-2xl text-white text-center mt-6">
                        {
                            isLoading ? 'Loading...' :
                            isError ? 'Error' :
                            username ? username.charAt(0).toUpperCase()+username.slice(1) : 'Username'
                        }
                    </h2>
                    <h2 className="text-xl text-white text-center">
                        {
                            isLoading ? 'Loading...' :
                            isError ? 'Error' :
                            email ? email : 'Email'
                        }
                    </h2>
                </div>
                <div className="w-2/3 lg:pl-10 pl-2 text-white">
                    No Posts Found !
                </div>
                {modalOpen && <UploadModal setModalOpen={setModalOpen} />}
            </div>
        </div>
    </section>
  )
}

export default Account