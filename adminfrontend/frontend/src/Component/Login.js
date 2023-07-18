import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logImg from './images/login.jpg';
import './login.css';

function Login(){
    const naviget = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        let login = localStorage.getItem("login");
        if(login){
            naviget("/home");
        }
        let loginStatus = localStorage.getItem("loginStatus");
        if(loginStatus){
            setError(loginStatus);
            setTimeout(function(){
                localStorage.clear();
                window.location.reload();
            }, 3000);
        }
        setTimeout(function(){
            setMsg("");
        }, 5000);
    }, [msg]);

    const handleInputChange = (e, type) => {
        switch(type){
            case "user":
                setError("");
                setUser(e.target.value);
                if(e.target.value === ""){
                    setError("Username has left blank");
                }
                break;
            case "pass":
                setError("");
                setPass(e.target.value);
                if(e.target.value === ""){
                    setError("Password has left blank");
                }
                break;
            default:
        }
    }

    function loginSubmit(){
        if(user !== "" && pass !== ""){
            var url = "http://localhost/react/login.php";
            var headers = {
                "Accept": "application/json",
                "Content-type": "application/json"
            };
            var Data = {
                user: user,
                pass: pass
            };
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
            .then((response) => {
                if(response[0].result === "Invalid username!" || response[0].result === "Invalid password!"){
                    setError(response[0].result);
                }
                else{
                    setMsg(response[0].result);
                    setTimeout(function(){
                        localStorage.setItem("login", true);
                        naviget("/home");
                    }, 5000);
                }
            }).catch((err) => {
                setError(err);
                console.log(err);
            })
        }
        else{
            setError("All field are required!")
        }
    }

    return(
        <div className="form">

          <section>

          <div className="imgBxLogin">
            <img src={logImg} alt="Form" />
          </div>


            <p>
                {
                    error !== "" ?
                    <span className="error">{error}</span> :
                    <span className="success">{msg}</span>
                }
            </p>

            <div className="contentBxLogin">
            

            <label>Username</label>

            <div className="inputBx">
            <input 
                type="text" 
                className="input-box"
                value={user}
                onChange={(e) => handleInputChange(e, "user")}
            />
            </div>

            <label>Password</label>

            <div className="inputBx">
            <input 
                type="password" 
                value={pass}
                className="input-box"
                onChange={(e) => handleInputChange(e, "pass")}
            />
            </div>

            <label></label>

            <div className="inputBx">
            <input 
                type="submit"
                defaultValue="Login" 
                className="submit-button"
                onClick={loginSubmit}
            />
            </div>

          </div>
          </section>
        </div>
    );
}

export default Login;