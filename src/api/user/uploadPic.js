import axiosPrivate from "../utils/axiosPrivate";

export const uploadUserPic = async (formData) => {
    const res = await axiosPrivate.post('/api/upload-profile-pic', formData);
    return res.data;
}