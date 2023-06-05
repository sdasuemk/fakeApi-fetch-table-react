import React, { useEffect, useState } from "react";

const UserTable = () => {
  const [user, setUser] = useState(undefined);
  console.log(user);
  const getUser = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <div>Table</div>
      <table style={{ border: "2px", width: "800px", height: "200px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>WEBSITE</th>
            <th>COMPANY</th>
          </tr>
        </thead>

        {user &&
          user.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              <td>{item.company.name}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};
export default UserTable;
