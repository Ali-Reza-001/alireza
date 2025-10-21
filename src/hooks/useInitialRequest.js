import { useRef } from "react";
import axiosPublic from "../api/utils/axiosPublic";

const useInitialRequest = async () => {
    let flag = useRef(false);
    if (!flag.current) {
        try {
            const res = await axiosPublic.get('/');
            console.log(res?.data);
        } catch (err) {
            console.log(err);
        }
        flag.current = true;
    }
}

export default useInitialRequest;