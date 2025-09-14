import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

const Logs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axiosInstance
      .get('/logs')
      .then((res) => setLogs(res.data))
      .catch((err) => console.error('Failed to fetch logs:', err));
  }, []);
  return (
    <div className="w-full h-full p-4">
        <h1 className="text-2xl px-4">Requests</h1>
        <hr className="w-[96%] h-[1px] border-black/40 mx-auto my-4"/>
        <div className="w-full px-8">
            <div className="w-full">
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

                    <tbody className="w-full">
                        {logs.map((log, index) => (
                            <tr key={index} className="border-b border-black/30 h-10">
                            <td>{log.timestamp}</td>
                            <td>{log.ip}</td>
                            <td>{log.method}</td>
                            <td>{log.url}</td>
                            <td title={log.userAgent}>
                                {log.userAgent.slice(0, 25)}...
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Logs