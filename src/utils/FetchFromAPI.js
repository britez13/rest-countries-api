import axios from "axios";

const URL = "https://restcountries.com/v3.1/all"

export const FetchFromAPI = async () => {
    const {data} = await axios.get(URL)
    return data;
}