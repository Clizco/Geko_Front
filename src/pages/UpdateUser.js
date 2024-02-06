import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

function UpdateUser () {
    const location=useLocation()
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")

    useEffect(() => {
        console.log(location)
        setfirstname(location.state.firstname)
        setlastname(location.state.lastname)
        setemail(location.state.email)
    }, [])

    

    const updateData= () =>{
        console.log(firstname, lastname);
        fetch("http://localhost:1500/account/updateUser", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON. stringify({
                id:location.state._id,
                firstname: firstname,
                lastname: lastname
                }),
            })
            .then ((res) => res.json())
            .then ((data) => {
                console. log(data);
                window.location.href="/dashboard"
                
                });
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">

                First Name<br/>
                <input placeholder="First Name" className="form-control" 
                  defaultValue={firstname} 
                  onChange={(e)=>setfirstname(e.target.value)}/><br />
                Last Name<br/>
                <input placeholder="Last Name" className="form-control" 
                defaultValue={lastname}
                onChange={(e)=>setlastname(e.target.value)}/><br />
                Email<br/>
                <input placeholder="Email" className="form-control" 
                defaultValue={email}
                disabled/><br />
                <button onClick={updateData}>Update Details</button>
            </div>
        </div>
    )
}
export default UpdateUser;