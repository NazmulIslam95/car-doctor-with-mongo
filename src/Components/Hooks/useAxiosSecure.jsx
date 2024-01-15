import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-tau-ten.vercel.app",
  withCredentials: "true",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  useEffect(() => {
    axios.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked by interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout user");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
