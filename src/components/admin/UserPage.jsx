import { useParams } from "react-router-dom"
import axiosPrivate from "../../api/utils/axiosPrivate";


const UserPage = () => {

    const {id} = useParams();
    const fetchUser = async () => {
        const user = await axiosPrivate.get(`/api/usersControl/${id}`);
        console.log(user)
    }
    fetchUser()

    return (
        <div className='w-full p-6 flex gap-6'>
            <div className="w-1/3">
                <div className="w-full h-20 rounded-[2rem] shadow-2xl shadow-black/50">

                </div>
            </div>
            <div className="w-2/3">
                <div className="w-full h-20 rounded-[2rem] shadow-2xl shadow-black/50">

                </div>
            </div>
        </div>
    )
}

export default UserPage