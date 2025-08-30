

const BreadCrumb = ({title}) => {
  return (
    <div className="lg:w-10/12 w-full mx-auto mt-0  lg:mt-20 lg:border-0 border-b-2 border-white/60">
        <div className="bread-crumb bg-[url(/bread-crumb.jpg)] bg-cover w-full h-auto lg:rounded-[2rem] shadow-2xl shadow-black/95">
            <h1 className='py-20 text-4xl font-bold text-center w-full bg-black/20 lg:rounded-[2rem]'>{title}</h1>
        </div>
    </div>
  )
}

export default BreadCrumb