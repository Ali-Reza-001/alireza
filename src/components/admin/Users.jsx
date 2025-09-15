import { useState, useEffect } from "react";

import axiosPrivate from "../../api/axiosPrivate";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";


const SingalUser = ({ data }) => {
  const { username, email, emailVerified, role} = data;
  const ip = data.ip || "undefined";

  let verified;
  emailVerified ? verified = "Verified" : verified = "Unverified";

  return (
    <tr className=" h-10 p-0 border-b border-black/40">
        <td>
            <p className="w-full h-full grid place-content-center">#1</p>
        </td>
        <td>
            <div className="flex items-baseline justify-start relative">
                <div className="w-10 h-10 gap-2 absolute top-1">
                    <div className="w-full h-full rounded-full grid place-content-center bg-pink-500 font-bold text-white text-xl ">{username.slice(0,1).toUpperCase()}</div>
                </div>
                <div className="w-full p-2 pl-12">
                    <p className="text-md leading-4">{username}</p>
                    <p className="text-md leading-4">{email}</p>
                </div>
            </div>
        </td>
        <td>{ip}</td>
        <td >
            <p className={emailVerified ? 'verified' : 'unverified'}>{verified}</p>
        </td>
        <td>{role}</td>
        <td>2015 / 9 / 4</td>
        <td>
            <div className="p-4 flex gap-1 items-center justify-start ">
                <div className="p-1 rounded-xl hover:bg-black/20 bg-black/10 transition-all duration-200 cursor-pointer" title="edit">
                    <CiEdit className="text-2xl"/>
                </div>
                <div className="p-1 rounded-xl hover:bg-red-200 bg-red-100 transition-all duration-200 cursor-pointer text-red-500" title="delete">
                    <MdOutlineDeleteOutline className="text-2xl"/>
                </div>
            </div>
        </td>
    </tr>
  );
};

const Users = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await axiosPrivate.get('/api/users');
                setUsers(response.data);
                users && setLoading(false)
            } catch (error) {
                setError(error)
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, [])



    return (
        <div className="w-full p-4">
            <h1 className="text-2xl px-4">Users</h1>
            <hr className="w-[96%] h-[1px] border-black/40 mx-auto my-4"/>
            <div className="w-full px-8">
                <div className="w-full">
                    <table className="w-full">
                        <thead className="w-full border-b border-black/30">
                            <tr className=" h-10">
                                <td>Id</td>
                                <td>User</td>
                                <td>ip</td>
                                <td>Email</td>
                                <td>Role</td>
                                <td>Date-joined</td>
                                <td>options</td>
                            </tr>
                        </thead>

                        <tbody className="w-full overflow-y-auto">
                            {
                                error ? <tr><td>Error</td></tr> :
                                loading ? <tr><td>Loading</td></tr> :
                                users.map((user, i) => <SingalUser data={user} key={i} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users