import { useNavigate, useParams } from "react-router-dom"

const Profile=()=>{
    let navigater=useNavigate();
    let {username, age}=useParams();
    return(
        <div><h2>This is a profile and the users name is {username}</h2>
        <h2>His age is {age}</h2>
        <button onClick={()=>{navigator("/Secondpage")}}>Second page link</button>
        </div>
    )
}
export default Profile;