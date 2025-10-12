import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllUsers, deleteUser } from '../../api/admin/users';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GoInfo } from "react-icons/go";
import { Link } from "react-router-dom";


const SingalUser = ({ data, index }) => {
  const { username, email, emailVerified, role, createdAt, ip, _id, userProfilePic, ipInfo} = data;

    const queryClient = useQueryClient();
    const {mutate: deleteUserMutate, isLoading} = useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {queryClient.invalidateQueries({queryKey: ['users']})},
        onError: (err) => {console.error('Delete failed :', err)}
    });

  const utcDate = new Date(createdAt);
  const KabulDate = utcDate.toLocaleString("en-US", { timeZone: "Asia/Kabul", hour12: true });

  const roles = (
    <div className="w-full">
        {role.sort().map((role, i) => role == 1001 ? <p key={i} className="text-sm leading-4">Admin</p> : role == 2002 ? <p key={i} className="text-sm leading-4">Blogger</p>: <p key={i} className="text-sm leading-4">User</p>)}
    </div>
  );

  const handleDelete = async (id) => {
    if(confirm('Delete this user ?')) {
        deleteUserMutate(id);
        console.log(data);
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
                    <div className="w-full h-full rounded-full grid place-content-center bg-pink-500 font-bold text-white text-xl ">
                        {
                            userProfilePic ?
                            <img src={`${userProfilePic}?tr=w-512,h-512,f-webp`} alt={username} className="w-full h-full object-cover rounded-full border-2 border-gray-500"/> :
                            username.slice(0,1).toUpperCase()
                        }
                    </div>
                </div>
                <div className="w-full p-2 pl-12">
                    <p className="text-md leading-4">{username}</p>
                    <p className="text-md leading-4">{email}</p>
                </div>
            </div>
        </td>
        <td>{ip || ipInfo.ip}</td>
        <td >
            <p className={emailVerified ? 'verified' : 'unverified'}>{emailVerified ? 'Verified' : 'Unverified'}</p>
        </td>
        <td>{roles}</td>
        <td>{KabulDate}</td>
        <td>
            <div className="flex gap-1 items-center justify-start ">
                <Link to={`/admin/edit-user/${_id}`} className="p-1 rounded-xl hover:bg-black/20 bg-black/10 transition-all duration-200 cursor-pointer" title="edit">
                    <CiEdit className="text-2xl"/>
                </Link>
                <div className="p-1 rounded-xl hover:bg-red-200 bg-red-100 transition-all duration-200 cursor-pointer text-red-500" title="delete" onClick={() => handleDelete(_id)}>
                    <MdOutlineDeleteOutline className="text-2xl"/>
                </div>
                <Link to={`/admin/user/${_id}`} className="p-1 rounded-xl hover:bg-blue-200 bg-blue-100 transition-all duration-200 cursor-pointer text-blue-500" title="delete">
                    <GoInfo className="text-2xl"/>
                </Link>
            </div>
        </td>
    </tr>
  );
};

const Users = () => {  

    const { data: users = [], isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: getAllUsers
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
                    <table className="w-full" id="usersTable">
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