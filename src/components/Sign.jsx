import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useSignup from '../hooks/useSignup';
import useSignin from '../hooks/useSignin';
import Spinner from './assets/Spinner';
import { FiEye, FiEyeOff } from 'react-icons/fi';


const SignForm = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';

  const [passVisible, setPassVisible] = useState('password');
  const [signing, setSign] = useState('in');

  let { sign, loading, error, success, setError } = signing === 'up' ? useSignup() : useSignin();
  const [form, setForm] = useState({ username: '', email: '', password: '' });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sign(form);
    if (result) {
      if(result?.accesstoken) {
        sessionStorage.setItem( 'accessToken' , result?.accessToken);
        setTimeout(() => {navigate('/');}, 2000);
      } else {
        setTimeout(() => {navigate('/resend');}, 2000);
      }
      console.log('User registered:', result);
    }
  };

  useEffect(() => {
    setForm({ username: '', email: '', password: '' });
    setError('');
  }, [signing]);

  return (
    <section className='w-full h-full bg-[radial-gradient(#555,#333)] flex flex-col flex-wrap overflow-hidden'>
        <div className="container mx-auto mt-40 mb-24 flex justify-center items-center">
          {
            loading ? 
              <Spinner/> :  
            (
              <form onSubmit={handleSubmit} className="lg:w-[40%] w-full lg:bg-white/20 mx-auto lg:rounded-[2rem] px-10 py-10 flex flex-col">
              <h1 className="w-full px-4 pb-8 text-3xl text-white">{signing === 'up' ? 'Sign Up' : 'Sign In'}</h1>
              {error && <p className="w-[96%] mx-auto px-4 py-1 font-medium text-red-500 bg-red-300 border-2 border-red-600 rounded-lg">{error}</p>}
              {success && <p className="w-[96%] mx-auto px-4 py-1 font-medium text-green-500 bg-green-300 border-2 border-green-600 rounded-lg">{success}</p>}
              {signing === 'up' ? (<input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={form.username}
                  onChange={handleChange}
                  autoComplete='off'
                  className=" w-full border-b-2 border-white text-white bg-white/0 mx-auto h-10 mt-4 p-4 focus:bg-transparent focus:outline-none"
              />) : ''}
              <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete='off'
                  className=" w-full border-b-2 border-white text-white bg-white/0 mx-auto h-10 mt-4 p-4 focus:bg-transparent focus:outline-none"
              />
              <div className="w-full relative">
                <input
                    type={passVisible}
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete='off'
                    className=" w-full border-b-2 border-white text-white bg-white/0 mx-auto h-10 mt-4 p-4 focus:bg-transparent focus:outline-none"
                />
                <div  className='absolute text-2xl text-white right-2 bottom-2' onClick={() => setPassVisible(prev => prev === 'text' ? 'password' : 'text')}>
                  {passVisible === 'password' ? <FiEye /> : <FiEyeOff />}
                </div>
              </div>
              <div className='w-full my-4 flex justify-between items-baseline px-4'>
                  <button type="submit" disabled={loading} className="inline border-2 border-white rounded-2xl text-white bg-transparent p-2 px-8 text-xl mt-10 hover:text-black/80 hover:bg-white">
                    {signing === 'up' ? 'Sign Up' : 'Sign In'}
                  </button>
                  <div onClick={() => setSign(prev => prev === 'in' ? 'up' : 'in')} className="text-xl text-white underline">{signing === 'up' ? 'Sign In' : 'Sign Up'}</div>
              </div>
              </form>
            )
          }
        </div>
    </section>
  );
};

export default SignForm;