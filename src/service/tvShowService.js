import { BASE_URL } from "@/constants/constants";

const getAllShows = async () => {
  const url = BASE_URL+'shows';
  try {
    const response = await fetch(url);
    const allShows = await response.json();
    return allShows;
  } catch(error) {
    console.log(error);
  }
};

const getList = async (input) => {
  const url = BASE_URL+'search/shows?q='+input;
  try {
    const response = await fetch(url);
    const showsList = await response.json();
    return showsList;
  }
  catch(error) {
    console.log(error);
  }
};

const getCastList = async (input) => {
  const url = BASE_URL+'/shows/'+input+'/cast';
  try {
    const response = await fetch(url);
    const castList = await response.json();
    return castList;
  } catch(error) {
    console.log(error);
  } 
}

export default {
  getList,
  getCastList,
  getAllShows,
};
