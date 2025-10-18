import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchLogs } from "../../api/admin/logs";
import axiosPrivate from "../../api/utils/axiosPrivate";

const Logs = () => {

  const {data: logs = [], isLoading, error} = useQuery({
    queryKey: ['logs'],
    queryFn: fetchLogs
  })

  return (
    <div className="lg:w-full lg:h-full max-w-[100vw] max-h-[100vh] lg:px-10 px-4 py-4">
        <h1 className="text-2xl px-4">Requests</h1>
        <hr className="w-full mx-auto border-2 border-black/30 rounded-full mt-3"/>
        <div className="w-full">
            <div className="w-full max-h-[calc(100vh-18vh)] overflow-y-auto pt-4">
                <table className="w-full centeredTable">
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
                                <tr>
                                    <td>Loading ...</td>
                                </tr> : 
                            error ? 
                                <tr>
                                    <td>{error}</td>
                                </tr> : 
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