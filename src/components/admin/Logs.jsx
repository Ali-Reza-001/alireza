import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchLogs } from "../../api/logs";
import axiosPrivate from "../../api/utils/axiosPrivate";

const Logs = () => {

  const {data: logs = [], isLoading, error} = useQuery({
    queryKey: ['logs'],
    queryFn: fetchLogs
  })

  return (
    <div className="w-full h-full p-4">
        <h1 className="text-2xl px-4">Requests</h1>
        <hr className="w-[96%] h-[1px] border-black/40 mx-auto my-4"/>
        <div className="w-full px-8">
            <div className="w-full max-h-[400px] overflow-y-auto">
                <table className="w-full">
                    <thead className="w-full border-b border-black/30">
                        <tr className=" h-10">
                            <td>Date</td>
                            <td>Ip</td>
                            <td>Method</td>
                            <td>Url</td>
                            <td>UserAgent</td>
                        </tr>
                    </thead>

                    <tbody className="w-full overflow-y-auto">
                        {
                            isLoading ? 
                                <p>Loading ...</p> : 
                            error ? 
                                <p>{error}</p> : 
                            logs.map((log, index) => (
                                <tr key={index} className="border-b border-black/30 h-10">
                                <td>{new Date(log.timestamp).toLocaleString("en-US", { timeZone: "Asia/Kabul", hour12: true })}</td>
                                <td>{log.ip}</td>
                                <td>{log.method}</td>
                                <td>{log.url.includes('?') ? log.url.split('?')[0] : log.url}</td>
                                <td title={log.userAgent}>
                                    {log.userAgent.slice(0, 25)}...
                                </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Logs