// import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Table } from "react-bootstrap";
import User from "./User";
import { useAppContext } from "../context/AppContext";
export default function Users() {
  // const [users, setUsers] = useState(null);
  const { users } = useAppContext();
  // const fetchUsers = async () => {
  //   console.log("fetched");
  //   const { data } = await axios("https://jsonplaceholder.typicode.com/users");
  //   return data;
  // };
  // useEffect(() => {
  //   return async () => {
  //     const users = await fetchUsers();
  //     console.log(users);
  //     setUsers(users);
  //   };
  // }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map(({ name, id, email, phone }, i) => {
            return (
              <User key={i} id={id} name={name} email={email} phone={phone} />
            );
          })}
      </tbody>
    </Table>
  );
}
