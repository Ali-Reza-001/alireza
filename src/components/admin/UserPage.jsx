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

    const { username, email, emailVerified, role, createdAt, updatedAt, password, ipInfo } = data;
    console.log(data);

    return (
        <div className='w-full p-6 pt-4 flex gap-6'>
            <div className="w-1/3">
                <div className="w-full p-4 rounded-[2rem] shadow-lg shadow-black/50">
                    <div className="w-1/2 aspect-square bg-pink-600 text-9xl text-white grid place-content-center mx-auto rounded-full border-8 border-green-400 my-6">
                        {username.charAt(0).toUpperCase()} 
                    </div>
                    <h2 className="text-center text-4xl">{username.charAt(0).toUpperCase()+username.slice(1)}</h2>
                    <div className="w-full p-4 py-8">
                        <p className="flex items-center">
                            <MdEmail className="text-2xl"/>
                            <span className="pl-4 text-xl">{email}</span>
                        </p>
                        <p className="flex items-center">
                            <FaUserTag className="text-2xl"/>
                            <span className="pl-4 text-lg">{id}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-2/3">
                <div className="w-full h-full rounded-[2rem] shadow-lg shadow-black/50">
                    <h2 className="w-full py-4 px-8 text-2xl">Information</h2>
                    <hr className="w-[94%] mx-auto border border-black/50"/>
                    <div className="w-full py-2 px-8">
                        <table>
                            <tr>
                                <td>Username :</td>
                                <td>{username}</td>
                            </tr>
                            <tr>
                                <td>Password :</td>
                                <td className="text-ellipsis" title={password}>{password.slice(0,50)}...</td>
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