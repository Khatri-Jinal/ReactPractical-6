import { UserType } from "../../actions/UserActionTypes";
import "./UserProfile.css";

interface UserProfileProptypes {
  selectedUser: UserType | null;
}

function UserProfile({ selectedUser }: UserProfileProptypes) {
  return (
    <div className="user-profile">
      <div className="user-top">
        <div className="user-img">
          <img
            className="profile-photo"
            src={selectedUser?.avatar}
            alt={"user"}
          />
        </div>
        <h4 className="name">
          {selectedUser?.first_name} {selectedUser?.last_name}
          {selectedUser?.id === 1 && <span className="dot"></span>}
        </h4>
        <p className="email">{selectedUser?.email}</p>
        <p className="plan">Your Plan: Standard</p>
        <button className="active-user-btn">Active User</button>
      </div>
      <div className="user-bottom">
        <h5 className="plan-uses">Plan Uses</h5>
        <div className="click-wrap">
          <div className="click-left">
            <h3 className="count">2,450</h3>
            <p className="title">clicks reviewed</p>
          </div>
          <div className="click-right">
            <h3 className="count">5000</h3>
            <p className="title">Monthly clicks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
