import { UserContext } from "./userContext";
import { useContext } from "react";

function Profile () {
    const user = useContext(UserContext) 
    console.error("error 21:4 user is not defined")
    return(
        <div>
            <h1>
                {user.name}
            </h1>
            <p>
                {user.age}
            </p>
        </div>
    )
}

export default Profile