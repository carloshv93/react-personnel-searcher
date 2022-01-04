import "./style.css";
export default function SearchUsersItem({ name, username, email, phone }) {
  return (
    <div className="search-users-items">
      <p>{`Name: ${name}`}</p>
      <p>{`Username: ${username}`}</p>
      <p>{`Email: ${email}`}</p>
      <p>{`Phone: ${phone}`}</p>
    </div>
  );
}
