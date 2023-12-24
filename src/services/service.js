import axios from "axios";
export const fetchDataFromAPI = () => {
  return axios
    .get("http://localhost:3002/api/data")
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error fetching Data", error);
      throw error;
    });
};
