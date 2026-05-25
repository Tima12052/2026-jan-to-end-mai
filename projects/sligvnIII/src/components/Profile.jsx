import { UserContext } from "./userContext";
import { useContext } from "react";

function Profile () {
    const user = useContext(UserContext) 
    console.error("error 21:4 user is not defined")
    return(
        <div>
            <p>
                {user.pryvit}
            </p>
            <h1>
                {user.ndt}
            </h1>
            <p>
                {user.name}
            </p>
        </div>
    )
}

export default Profile