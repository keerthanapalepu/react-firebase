import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import coverpage from "../assets/login-cover.png"
const Login = () => {
    const { googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async(e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
      <>
           <center>
                     <div>
                        <GoogleButton
                          className="g-btn"
                          type="dark"
                          onClick={handleGoogleSignIn}
                        />
                      </div>

          </center>
     </>
    );
};

export default Login;
// https://www.javacodegeeks.com/firebase-cloud-firestore-using-node-js.html
// https://kavitmht.medium.com/crud-with-firestore-using-the-node-js-sdk-c121ede57bcc
// https://medium.com/@ritik.gupta2018/crud-operations-in-firebase-using-async-await-in-node-js-1a3dac3db1f4
// https://dev.to/retool/crud-with-firestore-using-the-node-js-sdk-anp
