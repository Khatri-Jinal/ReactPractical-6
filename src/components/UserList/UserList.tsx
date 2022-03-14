import { useSelector } from "react-redux";
import { UserStore } from "../../store";
import User from "../User/User";
import "./UserList.css";

interface UserListPropTypes {
  pagenum: number;
  handleHover: (id: number) => void;
  handleMouseLeave: () => void;
}

function UserList({
  pagenum,
  handleHover,
  handleMouseLeave,
}: UserListPropTypes) {
  const userState = useSelector((state: UserStore) => state);
  if (userState.loading) {
    return <div className="loader"></div>;
  }

  if (userState.error) {
    return <p style={{ color: "red" }}>{userState.error}</p>;
  }

  return (
    <>
      <div>
        {userState.users?.map((user) => {
          return (
            <User
              key={user.id}
              {...user}
              handleHover={handleHover}
              handleMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
    </>
  );
}
export default UserList;
