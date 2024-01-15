import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  const servicesApi = "https://car-doctor-server-tau-ten.vercel.app/services";
  useEffect(() => {
    axios.get(servicesApi, { withCredentials: true }).then((res) => {
      setServices(res.data);
    });
  }, []);

  return services;
};

export default useServices;
