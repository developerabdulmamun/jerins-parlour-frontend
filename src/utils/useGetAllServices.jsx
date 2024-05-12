"use client";

import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useGetAllServices = () => {
  const axiosPublic = useAxiosPublic();

  const { data: services } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosPublic.get("/services");
      return res.data;
    },
  });
  return services;
};

export default useGetAllServices;
