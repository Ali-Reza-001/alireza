import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser, updateUser } from "../../api/admin/users";
import { SlCloudUpload } from "react-icons/sl";
import { useEffect, useState } from "react";
import { IoCamera } from "react-icons/io5";
import axiosPublic from "../../api/utils/axiosPublic";


const RoleBtn = ({role, roleId, roleName, handleToggle}) => {
    return (
        <div className="flex items-center justify-between mb-1">
            <p>{roleName}</p>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="role"
                    value={roleId}
                    checked={role.includes(roleId) ? true : false}
                    onChange={() => handleToggle(roleId)}
                    className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
            </label>
        </div>
    )
}


const EditUser = () => {

    const {id} = useParams();
    const {data, isLoading, error, isError} = useQuery({
        queryKey: ['user', id],
        queryFn: () => getUser(id),
        enabled: !!id // optional: prevents query from running if id is undefined
    });

    const queryClient = useQueryClient();

    const { mutate: updateUserFunc, isPending: isUpdatedLoading, isError: isUpdatedError, error: updatedError, isSuccess } = useMutation({
    mutationFn: ({ id, updatedUser }) => updateUser({ id, updatedUser }),
    onSuccess: (data) => {
        console.log('User updated:', data);
        queryClient.invalidateQueries(['user', id]); // refetch user data
    },
    onError: (err) => {
        console.error('Error updating user:', err);
    }
    });


    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newEmailVerified, setNewEmailVerified] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [newIp, setNewIp] = useState('');
    const [newRole, setNewRole] = useState([]);
    

    useEffect(() => {
        if (data) {
            setNewUsername(data.username);
            setNewEmail(data.email);
            setNewEmailVerified(data.emailVerified);
            setNewPassword(data.password);
            setNewIp(data.ip || data.ipInfo?.ip);
            setNewRole(data.role);
            setNewRole(data.role);
        }
    }, [data]);
    
    useEffect(() => {
        if (data?.role) {
            setNewRole(data.role);
        }
    }, [data]);


    if (isLoading) return <p className=" m-10 w-8 h-8 border-2 border-black/70 rounded-full border-b-transparent animate-spin"></p>;
    if (isError) return <p className="m-10 text-xl text-red-500">{error.message}</p>;

    const roleNames = [
        {roleId: 1001, roleName: 'Admin'},
        {roleId: 2002, roleName: 'Blogger'},
        {roleId: 9009, roleName: 'User'},
    ];


    const handleToggle = (roleId) => {
        setNewRole((prev) =>
            prev.includes(roleId)
            ? prev.filter((r) => r !== roleId)
            : [...prev, roleId]
        );
    };

    const handleInput = (e) => {
        const input = e.target;
        const {name, value} = input;
        if (name === 'username') setNewUsername(value);
        if (name === 'email') setNewEmail(value);
        if (name === 'password') setNewPassword(value);
        if (name === 'ip') setNewIp(value); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (window.confirm(`Are you sure you want to update the user ${data.username} (${id})?`)) {
            const updatedUser = {
                username: newUsername,
                email: newEmail,
                emailVerified: newEmailVerified,
                password: newPassword,
                ip: newIp,
                role: newRole,
            }

            updateUserFunc({ id, updatedUser });
        }
    }

    const sendVerification = async (e) => {
        e.preventDefault();

        if (window.confirm(`Are you sure you want to send a verification email to ${data.email}?`)) {
            try {
                const res = await axiosPublic.post('/resend-verification', { email: data.email });
                console.log(res.data);
                alert(`${res.data.message}`);
            } catch (err) {
                console.error(err);
                alert(`Error: ${err.response?.data?.message || err.message}`);
            }
        }
    }

    return (
        <div className='w-full p-6 pt-4'>
            <div className="w-full py-4 flex items-center gap-12">
                <h2 className="w-full text-xl pl-4">Edit User : {`${data.username} (${id})`}</h2>
                {
                    isUpdatedLoading && 
                    <div className="w-full text-xl pl-4 flex items-center gap-4">
                        <span className="pr-1">{`Updating the user `}</span>
                        <p className="w-6 h-6 border-2 border-black rounded-full border-b-transparent animate-spin"></p>
                    </div>
                }
                {isUpdatedError && <p className="w-full text-xl pl-4 text-red-500"> {`${updatedError} `}</p>}
            </div>
            <hr className="border border-black/40"/>
            <div className="w-full">
                <div className="w-full p-4 ">
                    <div className="w-full">
                        <form className="w-full">
                            <div className="w-full mb-6 flex items-center justify-between h-40">
                                <div className="w-full h-full flex items-center">
                                    <div className="w-40 relative aspect-square border-4 border-gray-500 rounded-2xl">
                                        {
                                            !data.userProfilePic ? 
                                            (<div className="w-full h-full bg-gray-300 rounded-xl grid place-content-center">
                                                <IoCamera className="text-5xl text-black" />
                                            </div>) :
                                            <img src={data.userProfilePic} alt={data.username} className="w-40 aspect-square rounded-xl" />
                                        }
                                        <SlCloudUpload className="absolute text-4xl p-1 pt-2 pl-2 bg-white bottom-0 right-0 rounded-br-xl rounded-tl-2xl"/>
                                    </div>
                                    <div className="w-40 h-full pl-10">
                                        <h2 className="text-2xl -ml-2">Role</h2>
                                        <div className="w-full pt-4">
                                            {roleNames.map((roleSingle, i) => {
                                                return <RoleBtn key={i} roleName={roleSingle.roleName} roleId={roleSingle.roleId} role={newRole} handleToggle={handleToggle} />
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className={`w-full h-full transition-all duration-300 rounded-2xl text-justify p-4 border-2 ${newEmailVerified ? ' border-green-500 bg-green-200 text-lg text-green-500 ' : 'border-red-500 bg-red-200 text-lg text-red-500'}`}>
                                    <h2 className="text-xl">Warning</h2>
                                    {
                                        newEmailVerified ?
                                        <p className="text-sm pl-2 pt-1">The current user has verified his email, you can change this by toggling the switch below.</p>
                                        :
                                        <p className="text-sm pl-2 pt-1">The current user hasn't verified his email, you can take one of these two decisions :</p>
                                    }
                                    <div className="flex justify-between items-center pt-8">
                                        <div className="">
                                            <div className="flex gap-2 items-center justify-between mb-1 pl-2">
                                                <p>Email Verified</p>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        name="role"
                                                        value='emailVerified'
                                                        checked={newEmailVerified}
                                                        onChange={() => setNewEmailVerified(prev => !prev)}
                                                        className="sr-only peer"
                                                    />
                                                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"></div>
                                                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                                                </label>
                                            </div>
                                        </div>
                                        { !newEmailVerified && <button className={`bg-white text-lg text-center border-2 border-transparent rounded-xl px-4 py-1 ${newEmailVerified ? ' text-green-500 hover:border-green-500' : ' text-red-500 hover:border-red-500'}`} onClick={sendVerification}>Send verification email</button>}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-3 gap-4 gap-y-2">
                                <div className="w-full mb-4">
                                    <label className="block mb-2" htmlFor="username">Username</label>
                                    <input type="text" id="username" name="username" defaultValue={newUsername}
                                    onChange={handleInput} className="w-full p-2 border border-black/40 rounded-lg focus:outline-none focus:border-black/70"/>
                                </div>
                                <div className="w-full mb-4">
                                    <label className="block mb-2" htmlFor="email">Email</label>
                                    <input type="email" id="email" defaultValue={newEmail} 
                                    onChange={handleInput} name="email" className="w-full p-2 border border-black/40 rounded-lg focus:outline-none focus:border-black/70"/>
                                </div>
                                <div className="w-full mb-4">
                                    <label className="block mb-2" htmlFor="password">Password</label>
                                    <input type="text" id="password" name="password" defaultValue={newPassword} 
                                    onChange={handleInput}  className="w-full p-2 border border-black/40 rounded-lg focus:outline-none focus:border-black/70"/>
                                </div>
                                <div className="w-full mb-4">
                                    <label className="block mb-2" htmlFor="ip">IP</label>
                                    <input type="text" id="ip" name="ip" defaultValue={newIp} 
                                    onChange={handleInput}  className="w-full p-2 border border-black/40 rounded-lg focus:outline-none focus:border-black/70"/>
                                </div>
                                <div className="w-full mb-4">
                                </div>
                                <div className="w-full mb-4">
                                    <input type="submit" defaultValue={'Submit'} onClick={handleSubmit} className="w-full p-2 border border-black/40 rounded-lg focus:outline-none hover:border-black/70 mt-8 bg-black/10 hover:bg-black/80 hover:text-white cursor-pointer"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser