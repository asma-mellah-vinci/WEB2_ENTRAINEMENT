import type { User } from "../../types";
import "./index.css"

interface UserCardProps {
    user : User;
}

const UserCard = (props : UserCardProps) => {

    let statusClass = "user-card-offline";
    let statusText  = "OffLine";

    if(props.user.isOnline){
        statusClass = "user-card-online";
        statusText  = "OnLine";
    }

    return (
        <div className="user-card">
        <h2>{props.user.name}</h2>
        <p>Age : {props.user.age}</p>
        <p className={statusClass}>{statusText}</p>

    </div>
    )
};

export default UserCard;