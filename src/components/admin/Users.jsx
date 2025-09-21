import { useState, useEffect } from "react";
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../../api/users';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

import axiosPrivate from "../../api/utils/axiosPrivate";


const SingalUser = ({ data, index }) => {
  const { username, email, emailVerified, role, createdAt, ip, _id} = data;

  const utcDate = new Date(createdAt);
  const KabulDate = utcDate.toLocaleString("en-US", { timeZone: "Asia/Kabul", hour12: true });

  const roles = (
    <div className="w-full">
        {role.sort().map((role, i) => role == 1001 ? <p key={i} className="text-sm leading-4">Admin</p> : role == 2002 ? <p key={i} className="text-sm leading-4">Blogger</p>: <p key={i} className="text-sm leading-4">User</p>)}
    </div>
  );

  const handleDelete = async (id) => {
    if(confirm('Delete this user ?')) {
        const res = await axiosPrivate.delete('/api/usersControl', {data: {id: _id}});
        console.log(res);
    }
  }

  return (
    <tr className=" h-10 p-0 border-b border-black/40">
        <td>
            <p className="w-full h-full grid place-content-center">#{index}</p>
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
            <p className={emailVerified ? 'verified' : 'unverified'}>{emailVerified ? 'Verified' : 'Unverified'}</p>
        </td>
        <td>{roles}</td>
        <td>{KabulDate}</td>
        <td>
            <div className="flex gap-1 items-center justify-start ">
                <div className="p-1 rounded-xl hover:bg-black/20 bg-black/10 transition-all duration-200 cursor-pointer" title="edit">
                    <CiEdit className="text-2xl"/>
                </div>
                <div className="p-1 rounded-xl hover:bg-red-200 bg-red-100 transition-all duration-200 cursor-pointer text-red-500" title="delete" onClick={() => handleDelete(_id)}>
                    <MdOutlineDeleteOutline className="text-2xl"/>
                </div>
            </div>
        </td>
    </tr>
  );
};

const Users = () => {  

    const { data: users = [], isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers
    });
    
    return (
        <div className="w-full p-4">
            <div className="w-full flex justify-start items-center">
                <h1 className="text-2xl px-4">Users</h1>
                <p>total ({users.length}) users</p>
            </div>
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
                                isLoading ? <tr><td>Loading</td></tr> :
                                users.map((user, i) => <SingalUser data={user} index={i + 1} key={i} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users