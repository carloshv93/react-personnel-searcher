import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchUsers from "./components/SearchUsers";
import "./style.css";

export default function Search() {
  const [isSearching, setIsSearching] = useState(false);
  const [usersData, setUsersData] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsersData(data);
    };
    getUsers();
  }, []);

  const handleClickSearch = (searchText) => {
    if (usersData?.length) {
      setIsSearching(true);
      searchText = searchText.toLowerCase();
      setUsers(
        usersData.filter(
          (user) =>
            user.name.toLowerCase().includes(searchText) ||
            user.username.toLowerCase().includes(searchText) ||
            user.email.toLowerCase().includes(searchText) ||
            user.phone.includes(searchText)
        )
      );
    }
  };

  const handleClose = () => {
    setIsSearching(false);
    setUsers([]);
  };

  return (
    <div className={`search ${isSearching ? "search--top" : "search--center"}`}>
      <SearchBox
        onSearch={handleClickSearch}
        onClose={handleClose}
        isSearching={isSearching}
      />
      {isSearching && <SearchUsers users={users} />}
    </div>
  );
}
