import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ThemeMode2 } from "../../App";
import { AddUser, RemoveUser } from "../Button/Button";

const User = ({ user, user: { name, email, id } }) => {
  const handleAddUser = (e, id) => {
    console.log(id, " => Line No: 7");
  };
  const handleRemoveUser = (e, id) => {
    console.log(id, " => Line No: 7");
  };
  const [img, setImg] = useState("");
  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((data) => setImg(data.data.results[0].picture.medium));
  }, []);
  const [theme2] = useContext(ThemeMode2);
  const { card, border } = theme2;
  console.log(img, " => Line No: 12");
  return (
    <div className={` ${card} p-4 `}>
      <div className={` ${border} p-4`}>
        <div className={`flex `}>
          <img className="h-16 w-16" src={img} alt={name} />
          <div className="text-sm ml-2">
            <h2 className="text-xl ">
              <span className="font-semibold">Name: {name || "Name"} </span>
            </h2>
            <h2>
              <span className="font-semibold">Email: {email || "Email"}</span>
            </h2>
          </div>
        </div>{" "}
        <div className="flex w-full justify-evenly my-1 gap-1">
          <AddUser id={id} handler={handleAddUser}>
            Add
          </AddUser>
          <RemoveUser id={id} handler={handleRemoveUser}>
            Remove
          </RemoveUser>
        </div>
      </div>
    </div>
  );
};

export default User;
