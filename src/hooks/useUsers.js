import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("placeholder.json")
      .then((data) => setUsers(data.data))
      .catch((message) => alert(message.message));
  }, []);

  return [users, setUsers];
};

export default useUsers;
