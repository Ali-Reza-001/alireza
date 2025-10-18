
import { useEffect, useState } from 'react';
import { FiInfo } from 'react-icons/fi'
import axiosPrivate from '../../api/utils/axiosPrivate';
import { CiEdit } from 'react-icons/ci';

const OfficialEmail = () => {

    const [readonly, setReadonly] = useState(true)

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [res, setRes] = useState(null)

    const [data, setData] = useState({
        sender: 'admin@ali-reza.dev', 
        receiver: 'someone@gmail.com', 
        subject: 'Greeting',
        message: 'Hi'
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError(null);
            setIsLoading(true)
            const response = await axiosPrivate.post('/api/official-email', data);
            console.log('Data received : '+ JSON.stringify(response.data));
            setRes(response.data.message);
        } catch (err) {
            setError(err);
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const removeRes = () => {setRes(null)};
        if(res) setTimeout(removeRes, 5000);
        return clearTimeout(removeRes, 5000);
    }, [res])


  return (
    <div className='max-w-[100vw] lg:w-full h-full lg:px-10 px-4 py-4 pb-20'>
        <div className="w-full">
            <h1 className="text-2xl">
                Official Email 
                {
                    isLoading ? 
                        (<span className='inline-block w-6 h-6 border-2 border-black/80 rounded-full border-b-transparent animate-spin ml-6 -mb-1'></span>) :
                    error ?  
                        (<p className='inline-block text-xl text-red-500 ml-8'>{error}</p>) :
                    (<p className='inline-block text-xl ml-8 text-green-500'>{res}</p>)
                }
                
            </h1>
        </div>
        <hr className='w-full mx-auto border-2 border-black/30 rounded-full mt-3'/>
        <div className="w-full max-h-[calc(100vh-18vh)] overflow-y-auto pt-4 px-4">
            <div className="w-full lg:flex justify-between mt-4 gap-8">
                <div className="w-full">
                    <label htmlFor="sender" className='text-xl pb-2 block'>Sender :</label>
                    <div className="w-full h-10 relative">
                        <input type="text" className='rounded-xl w-full bg-black/10 border-none outline-none focus:ring-1 ring-black/30 px-5 py-2 text-lg read-only:text-black/50' id='sender' value={data.sender} onChange={handleChange} readOnly={readonly} />
                        <CiEdit className='absolute right-1 top-1 text-4xl rounded-xl p-1 hover:bg-black/20 cursor-pointer' onClick={() => setReadonly(prev => !prev)}/>
                    </div>
                </div>
                <div className="w-full lg:mt-0 mt-4">
                    <label htmlFor="receiver" className='text-xl pb-2 block'>Receiver :</label>
                    <input type="text" className='rounded-xl w-full bg-black/10 border-none outline-none focus:ring-1 ring-black/30 px-5 py-2 text-lg' id='receiver' value={data.receiver} onChange={handleChange} />
                </div>
            </div>
            <div className="w-full mt-4">
                <label htmlFor="subject" className='text-xl pb-2 block'>Subject :</label>
                <input type="text" className='rounded-xl w-full bg-black/10 border-none outline-none focus:ring-1 ring-black/30 px-5 py-2 text-lg' id='subject' value={data.subject} onChange={handleChange} />
            </div>
            <div className="w-full mt-4">
                <label htmlFor="message" className='text-xl pb-2 block'>Message :</label>
                <textarea type="text" className='rounded-xl w-full bg-black/10 border-none outline-none focus:ring-1 ring-black/30 px-5 py-2 text-lg' id='message' value={data.message} onChange={handleChange} ></textarea>
            </div>
            <div className="w-full flex lg:flex-row flex-col-reverse items-center justify-between mt-8 gap-8">
                <div className="inline-block px-4 py-2 rounded-2xl border-2 border-blue-400 bg-blue-200 text-blue-500 text-md lg:mb-0 mb-4"><FiInfo className='block m-1 md:m-0 md:inline text-3xl md:mr-4' />This set up is sending email with <a className='underline' target='_blank' href="https://resend.com">Resend API</a> and receive emails with <a className='underline' target='_blank' href="https://improvmx.com">ImprovMX API</a> in this custom domain.</div>
                <button className='px-16 py-2 text-xl text-black bg-black/10 hover:bg-black/30 rounded-2xl' onClick={handleSubmit} >Send</button>
            </div>
        </div>
    </div>
  )
}

export default OfficialEmail