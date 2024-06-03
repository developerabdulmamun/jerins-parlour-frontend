import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://jerins-parlour-backend-lyart.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
