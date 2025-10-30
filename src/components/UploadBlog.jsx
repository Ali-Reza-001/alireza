import { useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa';
import axiosPrivate from '../api/utils/axiosPrivate';

const UploadBlog = () => {
    const [data, setData] = useState({
        title: '',
        category: '',
        content: ''
    })
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleFile = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('category', data.category);
        setIsLoading(true);
        try {
            const res = await axiosPrivate.post('/api/upload-blog', formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            });
            console.log('Blog uploaded : ', res.data);
            setSuccess(res.data.message);
        } catch (err) {
            setError(err);
            console.error('Upload failed :', err);
        } finally {
            setIsLoading(false);
        }

    }



  return (
      <section className='w-full h-full bg-[radial-gradient(#555,#333)] flex flex-col flex-wrap overflow-hidden'>
            <div className="w-full mx-auto mt-28 mb-24 flex justify-center items-center">
                <div className="lg:w-[80%] w-full text-white lg:bg-white/20 mx-auto lg:rounded-[2rem] px-10 py-4">
                    <div className='flex px-4 items-center gap-8'>
                        <h1 className='text-2xl'>New Blog</h1>
                        {
                            isLoading ? <p className='w-6 h-6 border-2 border-white rounded-full border-b-transparent animate-spin'></p> :
                            <p className='text-xl text-green-500 flex-1 px-4'>{success}</p>
                        }
                    </div>
                    {
                        error && <p className='text-xl text-red-500 flex-1 px-4'>{error}</p>
                    }
                    <hr className='w-full border-2 border-white rounded-full mx-auto my-2'/>
                    <div className="w-full lg:flex py-4">
                        <div className="lg:w-1/3 w-full lg:border-r-2 lg:border-b-0 border-b-2 pb-4 border-white px-4">
                            <p className='p-2 text-xl text-center mb-2'>Upload your post image</p>
                            <div className={`w-10/12 mx-auto border-4 border-dashed border-white flex items-center justify-center rounded-[2rem] ${file ? '' : 'aspect-square'}`}>
                                {
                                    file ? (
                                        <div className={`w-full h-full relative bg-[url(${URL.createObjectURL(file)})] bg-cover bg-center rounded-[2rem] overflow-hidden`}>
                                            <img src={URL.createObjectURL(file)} alt="uploadPic" className='w-full h-full' />
                                            <FaTimes className='text-4xl p-1 rounded-lg top-3 right-3 absolute z-10 bg-white text-black' onClick={() => setFile(null)} />
                                        </div>
                                    ) : (
                                        <div>
                                            <input type="file" id="picUpload" className="-left-[1000%] opacity-0" accept="image/png, image/jpg, image/jpeg" onChange={handleFile} />
                                            <label htmlFor="picUpload" className=" flex justify-center items-center w-20 h-20 mx-auto -mt-10">
                                                <FiUpload className="w-20 h-20 text-2xl p-1 cursor-pointer " />
                                            </label>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <form className='lg:w-2/3 w-full p-4 lg:px-8 px-2' onSubmit={handleSubmit}>
                            <div className="w-full lg:flex gap-4 items-center">
                                <div className="lg:w-1/2 w-full mb-4">
                                    <label htmlFor="title" className='block p-2 text-xl'>Title</label>
                                    <input 
                                        type="text" 
                                        className='w-full py-2 focus:ring-1 cursor-default hover:bg-white/20 px-4 focus:outline-none focus:ring-white rounded-xl bg-white/10' 
                                        id='title' 
                                        onChange={handleChange}
                                        value={data.title}
                                    />
                                </div>
                                <div className="lg:w-1/2 w-full mb-4">
                                    <label htmlFor="category" className='block p-2 text-xl'>Category</label>
                                    <input 
                                        type="text" 
                                        className='w-full py-2 focus:ring-1 cursor-default hover:bg-white/20 px-4 focus:outline-none focus:ring-white rounded-xl bg-white/10' 
                                        id='category'
                                        onChange={handleChange}
                                        value={data.category}
                                    />
                                </div>
                            </div>
                            <div className="w-full mb-4">
                                <label htmlFor="content" className='block p-2 text-xl'>Content</label>
                                <textarea 
                                    type="text" 
                                    className='w-full py-2 focus:ring-1 cursor-default hover:bg-white/20 px-4 focus:outline-none focus:ring-white rounded-xl bg-white/10 leading-4' 
                                    id='content'
                                    onChange={handleChange}
                                    value={data.content}
                                ></textarea>
                            </div>
                            <button type='submit' className='block transition-all duration-300 px-8 py-2 text-xl bg-white border-2 border-white rounded-2xl text-black ml-auto hover:text-white hover:bg-transparent'>Submit</button>
                        </form>
                    </div>
              </div>
            </div>
      </section>
  )
}

export default UploadBlog