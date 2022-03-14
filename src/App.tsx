import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "./actions/UserActions";
import { UserType } from "./actions/UserActionTypes";
import UserPagination from "./components/UserPagination/UserPagination";
import { UserStore } from "./store";
import Heading from "./components/Heading/Heading";
import UserList from "./components/UserList/UserList";
import UserProfile from "./components/UserProfile/Userprofile";

export interface DataType {
  selected: number;
}

function App() {
  const dispatch = useDispatch();
  const userState = useSelector((state: UserStore) => state);
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [pagenum, setPageNum] = useState(1);
  const handlePageClick = (data: DataType) => {
    setPageNum(data.selected + 1);
  };

  const handleHover = (id: number) => {
    if (userState.users) {
      const selectedUserInfo = userState.users.find((user) => user.id === id);
      if (selectedUserInfo) {
        setSelectedUser(selectedUserInfo);
      }
    }
  };

  const handleMouseLeave = () => {
    setSelectedUser(null);
  };

  const profile_info = selectedUser !== null && (
    <UserProfile selectedUser={selectedUser} />
  );
  useEffect(() => {
    dispatch(GetUser(pagenum));
  }, [pagenum, dispatch]);
  return (
    <div className="App">
      <div className="container">
        <div className="app-wrapper">
          <div className="left-block">
            <Heading />
            <UserList
              pagenum={pagenum}
              handleHover={handleHover}
              handleMouseLeave={handleMouseLeave}
            />
          </div>
          <div className="right-block">{profile_info}</div>
        </div>
        <div className="pagination-container">
          <UserPagination handlePageClick={handlePageClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
