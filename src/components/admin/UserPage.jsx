import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../api/admin/users";
import { MdEmail } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";


const UserPage = () => {

    const {id} = useParams();
    const {data, isLoading, error, isError} = useQuery({
        queryKey: ['user', id],
        queryFn: () => getUser(id),
        enabled: !!id // optional: prevents query from running if id is undefined
    });

    if (isLoading) return <p className=" m-10 w-8 h-8 border-2 border-black/70 rounded-full border-b-transparent animate-spin"></p>;
    if (isError) return <p className="m-10 text-xl text-red-500">{error.message}</p>;

    const { username, email, emailVerified, role, createdAt, updatedAt, password, ipInfo, userProfilePic, isOnline } = data;
    console.log(data);

    return (
        <div className='lg:w-full max-w-[100vw] lg:max-h-full h-auto overflow-auto  lg:px-6 px-3  py-10 lg:flex gap-6'>
            <div className="lg:w-1/3 w-full">
                <div className="w-full p-4 rounded-[2rem] shadow-2xl shadow-black/50">
                    <div className={`w-1/2 aspect-square bg-pink-600 text-9xl text-white grid place-content-center mx-auto rounded-full border-4 my-6 ${isOnline ? 'border-green-500' : 'border-gray-400'}`}>
                        {
                            userProfilePic ?
                            <img src={`${userProfilePic}?tr=w-512,h-512,f-webp`} alt={username} className="w-full h-full object-cover rounded-full"/> :
                            username.charAt(0).toUpperCase()
                        } 
                    </div>
                    <h2 className="text-center text-4xl">{username.charAt(0).toUpperCase()+username.slice(1)}</h2>
                    <div className="w-full p-4 py-8">
                        <p className="flex items-center">
                            <MdEmail className="text-2xl"/>
                            <span className={`pl-4 ${email.length > 20 ? 'text-md' : 'text-xl'}`}>{email.length > 30 ? email.slice(0,30) : email}</span>
                        </p>
                        <p className="flex items-center">
                            <FaUserTag className="text-2xl"/>
                            <span className="pl-4 text-lg">{id}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:w-2/3 w-full lg:my-0 my-8 ">
                <div className="w-full h-full rounded-[2rem] shadow-2xl shadow-black/50">
                    <h2 className="w-full py-4 px-8 text-2xl">Information</h2>
                    <hr className="w-[94%] mx-auto border border-black/50"/>
                    <div className="w-full py-2 px-8">
                        <table>
                            <tr>
                                <td>Username :</td>
                                <td>{username}</td>
                            </tr>
                            <tr>
                                <td>Email Verified :</td>
                                <td>{String(emailVerified)}</td>
                            </tr>
                            <tr>
                                <td>User Role :</td>
                                <td>{role.map((role => role == 1001 ? 'Admin ' : role == 2002 ? 'Blogger ' : 'User '))}</td>
                            </tr>
                            <tr>
                                <td>Created at :</td>
                                <td>{new Date(createdAt).toLocaleTimeString("en-US", { timeZone: "Asia/Kabul", hour12: true })}</td>
                            </tr>
                            <tr>
                                <td>Updated at :</td>
                                <td>{new Date(updatedAt).toLocaleTimeString("en-US", { timeZone: "Asia/Kabul", hour12: true })}</td>
                            </tr>
                        </table>
                        
                        <hr className="w-full mx-auto border border-black/50 mb-4 mt-1"/>
                        <h2 className="text-xl">IP Info</h2>
                        <hr className="w-full mx-auto border border-black/50 my-1"/>
                        <table>
                            <tr>
                                <td>IP :</td>
                                <td>{ipInfo.ip}</td>
                            </tr>
                            <tr>
                                <td>Location (Physical) :</td>
                                <td>{ipInfo.country} {ipInfo.city}</td>
                            </tr>
                            <tr>
                                <td> Location (Satalite) :</td>
                                <td>{ipInfo.loc}</td>
                            </tr>
                            <tr>
                                <td>ISP :</td>
                                <td>{ipInfo.org}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage