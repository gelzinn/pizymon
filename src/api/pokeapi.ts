import axios from "axios";

const fetchBase = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export default fetchBase;

export const createApiRequest = async (url: string, data: any) => {
  try {
    const response = await fetchBase({
      url,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
