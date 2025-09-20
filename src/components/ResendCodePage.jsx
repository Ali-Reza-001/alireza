
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams, Link } from 'react-router-dom';

import axiosPublic from '../api/axiosPublic';
import PlaceHolder from './assets/PlaceHolder';

const ResendCodePage = () => {

  const [searchParams] = useSearchParams();
  const [token, setToken] = useState(searchParams.get('verifyToken'));
  const [emailRes, setEmailRes] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';

  const [resend, setResend] = useState(40);

  useEffect(() => {
    const fetchVerification = async () => {
      if(token) {
        const res = await axiosPublic.get(`/verify?verifyToken=${token}`);
        setEmailRes(res?.data);
        console.log(emailRes)
      } 
    }
    fetchVerification();
  }, [token])

  useEffect(() => {
    let timeout;
    resend == 0 ?
      setResend('') :
    setTimeout(timeout = () => {setResend(prev => prev -1)}, 1000);
    return clearTimeout(timeout, 1000);
  }, [resend]);

  const handleReset = async (e) => {
    e.preventDefault();
    setResend(40)
  };

  return (
    <PlaceHolder>
        <div className='w-full'>
            <h1 className='text-2xl text-white pt-4 px-2 pb-4 mb-4 border-b border-white'>Email Verification</h1>
            <p className='text-justify px-2 text-white mb-10'>{!emailRes ? <span>The system just sent you an email for verification, please verify that. <br /><br /> If you haven't received any emails yet, please click the resend button below :</span> : <span>{emailRes}<br/><br/><Link className='my-4 text-white text-xl underline' to={'/sign'}>Login</Link></span>}</p>
            {!emailRes && <button onClick={handleReset} className='inline py-2 px-4 disabled:bg-white/50 bg-white/80 disabled:text-black/50 text-black rounded-full text-lg full' disabled={Boolean(resend)} >
            { Boolean(resend)? "Just Resent" : "Resend"} <span>{resend}</span>
            </button>}
        </div>
    </PlaceHolder>
  )
}

export default ResendCodePage