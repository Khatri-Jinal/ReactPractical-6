import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../actions/UserActions";
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
  const dispatch = useDispatch();
  const userState = useSelector((state: UserStore) => state);

  useEffect(() => {
    dispatch(GetUser(pagenum));
  }, [pagenum, dispatch]);

  return (
    <>
      <div>
        {userState.loading ? (
          <div className="loader"></div>
        ) : userState.users ? (
          userState.users.map((user) => {
            return (
              <User
                key={user.id}
                {...user}
                handleHover={handleHover}
                handleMouseLeave={handleMouseLeave}
              />
            );
          })
        ) : (
          <p style={{ color: "red" }}>{userState.error}</p>
        )}
      </div>
    </>
  );
}
export default UserList;
