import { Link } from 'react-router-dom';
import { useState } from 'react';
import useSignup from '../hooks/useSignup';

const SignupForm = () => {
  const { signup, loading, error } = useSignup();
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signup(form);
    if (result) {
      // Redirect or show success
      console.log('User registered:', result);
    }
  };

  return (
    <section className='w-full h-full bg-[radial-gradient(#555,#333)] flex flex-col flex-wrap overflow-hidden'>
        <div className="container mx-auto mt-40 mb-24">
            <form onSubmit={handleSubmit} className="lg:w-[40%] w-full bg-white/20 mx-auto lg:rounded-[2rem] px-10 py-10 flex flex-col">
            <h1 className="w-full px-4 pb-8 text-3xl text-white">Sign Up</h1>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                className=" w-full border-b-2 border-white text-white bg-white/0 mx-auto h-10 mt-4 p-4 focus:bg-transparent focus:outline-none"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className=" w-full border-b-2 border-white text-white bg-white/0 mx-auto h-10 mt-4 p-4 focus:bg-transparent focus:outline-none"
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className=" w-full border-b-2 border-white text-white bg-white/0 mx-auto h-10 mt-4 p-4 focus:bg-transparent focus:outline-none"
            />
            {error && <p className="text-red-500">{error}</p>}
            <div className='w-full my-4 flex justify-between items-baseline px-4'>
                <button type="submit" disabled={loading} className="inline border-2 border-white rounded-2xl text-white bg-transparent p-2 px-8 text-xl mt-10 hover:text-black/80 hover:bg-white">
                    {loading ? 'Signing up...' : 'Sign Up'}
                </button>
                <Link to={'/signIn'} className="text-xl text-white underline">SignIn</Link>
            </div>
            </form>
        </div>
    </section>
  );
};

export default SignupForm;