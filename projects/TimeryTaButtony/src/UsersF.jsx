import React, { Component, useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    fetchUsers();
    console.log("Mounted");
  }, []);

  const fetchUsers = () => {
    setLoading(true);

    setTimeout(() => {
      const data = [
        { id: 1, name: "John" },
        { id: 2, name: "Anna" },
        { id: 3, name: "Mike" },
      ].filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );

      setUsers(data);
      setLoading(false);
      console.log("Unmounted");
    }, 500);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    fetchUsers();
  };

  return (
    <div>
      <input
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />

      {loading && <p>Loading...</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
