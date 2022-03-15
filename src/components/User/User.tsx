import UserInfo from "../UserInfo/UserInfo";
import "./User.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Lock, Trash2 } from "react-feather";

interface UserProps {
  key: number;
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  handleHover: (id: number) => void;
  handleMouseLeave: () => void;
}

function User({
  id,
  email,
  first_name,
  last_name,
  avatar,
  handleHover,
  handleMouseLeave,
}: UserProps) {
  const options = ["Active", "Inactive"];

  const accessOptions = ["Manager", "Read"];

  const name = first_name + " " + last_name;
  const currentStatus =
    id === 1 ? (
      <p style={{ color: "green" }}>Active</p>
    ) : (
      <Dropdown options={options} value="Inactive" />
    );

  const currentAccess =
    id === 1 ? (
      <p>Owner</p>
    ) : (
      <Dropdown options={accessOptions} value="Manager" />
    );

  const currentSymbol =
    id === 1 ? (
      <p>
        <Lock />
      </p>
    ) : (
      <p>
        {" "}
        <Trash2 />
      </p>
    );
  return (
    <div
      className="user"
      onMouseOver={() => handleHover(id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="user-info">
        <UserInfo name={name} email={email} image={avatar} />
      </div>
      <div className="status">{currentStatus}</div>
      <div className="access">{currentAccess}</div>
      <div className="symbol">{currentSymbol}</div>
    </div>
  );
}
export default User;
