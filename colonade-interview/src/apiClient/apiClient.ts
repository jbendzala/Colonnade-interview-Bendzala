import axios from "axios";
import { useQuery } from "react-query";

const useAxiosInstance = () => {
  const apiClient = axios.create({
    baseURL: `http://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`,
  });

  return apiClient;
};

export const useGetMovies = ({ s, i }: { s?: string; i?: string }, options) => {
  const apiClient = useAxiosInstance();

  return useQuery(
    `getMovies${i}` as const,
    async () =>
      await apiClient.get("", {
        params: { s, i },
      }),
    options
  );
};
