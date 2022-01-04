import "./style.css";
import SearchUsersItem from "./SearchUsersItem";

export default function SearchUsers({ users }) {
  const renderResults = () => {
    return users?.map((user) => <SearchUsersItem key={user.id} {...user} />);
  };

  const renderNoResults = () => {
    return <span>There are no results.</span>;
  };
  return (
    <div className="search-results">
      {users.length > 0 ? renderResults() : renderNoResults()}
    </div>
  );
}
