import React, { useContext } from "react";
import { ThemeMode2 } from "../../App";
import useUsers from "../../hooks/useUsers";
import User from "../User/User";
import UsersCarts from "../UsersCarts/UsersCarts";

const Users = () => {
  const [users, setUsers] = useUsers();
  const [theme2] = useContext(ThemeMode2);
  const { background } = theme2;
  return (
    <div className={`grid grid-cols-1 md:grid-cols-[1fr_300px] ${background} min-h-screen p-4`}>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-2`}>{users.length >= 1 && users.map((user) => <User key={user?.id} user={user}></User>)}</div>
      <UsersCarts />
    </div>
  );
};

export default Users;
