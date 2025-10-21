
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { deleteAllLogs, getAllLogs } from "../../api/admin/logs";
import { MdLaptopMac, MdPhoneAndroid } from 'react-icons/md';
import { FaWindows, FaApple, FaLinux, FaTabletAlt } from 'react-icons/fa';
import { DiAndroid } from "react-icons/di";
import { TbDeviceDesktopQuestion } from "react-icons/tb";
import { BsQuestionOctagon, BsThreeDotsVertical } from "react-icons/bs";

const LogRow = ({log, index}) => {

    return (
        <tr key={index} className="border-b border-black/30 h-10">
            <td>{new Date(log.createdAt).toLocaleString("en-US", { timeZone: "Asia/Kabul", hour12: true })}</td>
            <td>{log.user}</td>
            <td>{log.trip.length}</td>
            <td>
                {log.trip.map((tripItem, i) => {
                    if (i == log.trip.length - 1) {
                        return tripItem.timeElapsed;
                    }
                })}s
            </td>
            <td title={log.device} className={'flex gap-2 items-center pt-2 justify-center'}>
                {
                    log.device.includes('Android') ? 
                        <><MdPhoneAndroid className="text-xl" /><DiAndroid Linux className="text-green-600 text-xl" /></> :
                    log.device.includes('iPhone') ? 
                        <><MdPhoneAndroid className="text-xl" /><FaApple className="text-gray-500 text-xl" /></> :
                    log.device.includes('iPad') ? 
                        <><FaTabletAlt className="text-xl" /><FaApple className="text-gray-500 text-xl" /></> :
                    log.device.includes('Windows') ? 
                        <><MdLaptopMac className="text-xl" /><FaWindows className="text-blue-500 text-xl" /></> :
                    log.device.includes('Macintosh') || log.device.includes('Mac OS') ? 
                        <><MdLaptopMac className="text-xl" /><FaApple className="text-gray-500 text-xl" /></> :
                    log.device.includes('Linux') ? 
                        <><MdPhoneAndroid className="text-xl" /><FaLinux className="text-green-500 text-xl" /></> :
                    <><TbDeviceDesktopQuestion className="text-xl" /><BsQuestionOctagon className=" text-xl" /></>
                }
            </td>
            <td><BsThreeDotsVertical className="text-3xl rounded-lg p-1 hover:bg-black/20 cursor-pointer" /></td>
        </tr>
    )
} 

const Logs = () => {

    const {data: logs = [], isLoading, error} = useQuery({
        queryKey: ['logs'],
        queryFn: getAllLogs
    });
  
    const queryClient = useQueryClient();
    const {mutate: deleteLogMutate, isLoading: deleteIsLoading, data} = useMutation({
        mutationFn: deleteAllLogs,
        onSuccess: () => {queryClient.invalidateQueries({queryKey: ['logs']})},
        onError: (err) => {console.error('Delete failed :', err)}
    });

    const handleDelete = () => {
        if(confirm('Are you sure that you want to delete all these logs ?')) {
            deleteLogMutate();
            console.log(data)
        }
    }


  return (
    <div className="lg:w-full lg:h-full max-w-[100vw] max-h-[100vh] lg:px-10 px-4 py-4">
        <div className="w-full flex px-4 justify-between items-center">
            <h1 className="text-2xl px-4">Requests</h1>
            <button className="text-xl py-1 px-5 rounded-xl bg-red-300 text-red-600 border-2 border-transparent hover:border-red-600" onClick={handleDelete}>
                {
                    deleteIsLoading ?
                        <span className="block w-10 h-10 mx-auto border-2 border-red-600 rounded-full border-b-transparent animate-spin"></span> :
                    'Delete All'
                }
            </button>
        </div>
        <hr className="w-full mx-auto border-2 border-black/30 rounded-full mt-3"/>
        <div className="w-full">
            <div className="w-full max-h-[calc(100vh-18vh)] overflow-y-auto pt-4">
                <table className="w-full centeredTable">
                    <thead className="w-full border-b border-black/30">
                        <tr className=" h-10">
                            <td>Date</td>
                            <td>User</td>
                            <td>ApiCalls</td>
                            <td>TimeSpent</td>
                            <td>Device</td>
                            <td></td>
                        </tr>
                    </thead>

                    <tbody className="w-full overflow-y-auto text-black">
                        {
                            isLoading ? 
                                <tr>
                                    <td>Loading ...</td>
                                </tr> : 
                            error ? 
                                <tr>
                                    <td className="text-xl text-red-500 p-4">{JSON.stringify(error)}</td>
                                </tr> : 
                            !logs.length ? 
                                <tr>
                                    <td className="text-xl p-4">No logs available !</td>
                                </tr> : 
                            logs.map((log, i) => {
                                return <LogRow key={i} log={log} index={i}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Logs