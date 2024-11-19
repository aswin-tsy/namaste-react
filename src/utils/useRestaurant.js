import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurant = (restId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + restId);
    const json = await data.json();
    setRestInfo(json.data);
  };

  return restInfo;
};

export default useRestaurant;
