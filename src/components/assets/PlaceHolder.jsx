

const PlaceHolder = ({children}) => {
  return (
    <section className='w-full h-full bg-black/70 py-20 pt-32'>
        <div className="w-[80%] lg:w-[500px] mx-auto my-8 mt-12 rounded-[2rem] bg-white/10 p-6">
            {children}
        </div>
    </section>
  )
}

export default PlaceHolder