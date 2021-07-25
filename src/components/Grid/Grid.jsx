import { useState, useEffect } from "react";

// style:
import "./Grid.scss";

const Grid = () => {
  const [users, setUsers] = useState([]);
  const request = new Request("https://jsonplaceholder.typicode.com/users");

  useEffect(() => {
    fetch(request)
      .then((res) => {
        if (!res.ok) {
          return Error("There was an error fetching data from server");
        }
        return res.json();
      })
      .then((data) => setUsers(data));
  });

  return (
    <div className="Grid">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr className="Grid__item" key={user.id}>
              <td className="Grid__item-prop">{user.id}</td>
              <td className="Grid__item-prop">{user.name}</td>
              <td className="Grid__item-prop">{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
